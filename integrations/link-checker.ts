// integrations/link-checker.ts
import type { AstroIntegration } from 'astro';
import * as fs from 'fs';
import * as path from 'path';

interface LinkCheckerOptions {
  failOnError?: boolean;
  checkExternal?: boolean;
  exclude?: string[];
  timeout?: number;
  verbose?: boolean;
  logFile?: string;  // Path to log file for broken links
}

// Simple recursive function to find HTML files
function findHtmlFiles(dir: string): string[] {
  const files: string[] = [];
  
  function traverse(currentDir: string) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      
      if (entry.isDirectory()) {
        traverse(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.html')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

export function linkChecker(options: LinkCheckerOptions = {}): AstroIntegration {
  const { 
    failOnError = true, 
    checkExternal = false, 
    exclude = [], 
    timeout = 5000,
    verbose = false,
    logFile
  } = options;

  let astroConfig: any;

  return {
    name: 'link-checker',
    hooks: {
      'astro:config:done': ({ config }) => {
        // Store the Astro config for later use
        astroConfig = config;
      },
      'astro:build:done': async ({ dir, logger }) => {
        // Get the base path from Astro's config
        const basePath = astroConfig?.base || '/';
        
        logger.info(`🔗 Checking links... (base path: ${basePath})`);
        
        try {
          const distPath = dir.pathname;
          const htmlFiles = findHtmlFiles(distPath);
          const errors: string[] = [];
          const warnings: string[] = [];
          let totalLinks = 0;
          
          for (const file of htmlFiles) {
            const content = fs.readFileSync(file, 'utf-8');
            const linkMatches = content.match(/href="([^"]*)"/g) || [];
            
            for (const linkMatch of linkMatches) {
              const href = linkMatch.match(/href="([^"]*)"/)?.[1];
              if (!href || exclude.some(pattern => href.includes(pattern))) continue;
              
              // Skip anchors, mailto, tel, javascript links
              if (href.startsWith('#') || href.startsWith('mailto:') || 
                  href.startsWith('tel:') || href.startsWith('javascript:')) {
                continue;
              }
              
              totalLinks++;
              
              // Check internal links
              if (href.startsWith('/')) {
                let linkToCheck = href;
                let isValidBaseLink = true;
                
                // When base path is not '/', internal links should start with the base path
                if (basePath !== '/') {
                  if (href.startsWith(basePath)) {
                    // Link correctly includes base path, remove it for file system checking
                    linkToCheck = href.substring(basePath.length) || '/';
                  } else {
                    // Link is missing the required base path - this is an error
                    const relativePath = path.relative(process.cwd(), file);
                    errors.push(`❌ Internal link missing base path '${basePath}': ${href} in ${relativePath} (should be: ${basePath}${href})`);
                    isValidBaseLink = false;
                  }
                }
                
                // Only check file existence if the base path is correct
                if (isValidBaseLink) {
                  // Generate possible file paths in the dist directory
                  const possiblePaths = [
                    // Direct match
                    path.join(distPath, linkToCheck === '/' ? 'index.html' : `${linkToCheck}.html`),
                    path.join(distPath, linkToCheck, 'index.html'),
                    path.join(distPath, linkToCheck),
                    // Try without intermediate directories (common in Astro content collections)
                    ...linkToCheck.split('/').length > 2 ? [
                      path.join(distPath, linkToCheck.split('/').slice(0, -1).join('/'), linkToCheck.split('/').pop() + '.html'),
                      path.join(distPath, linkToCheck.split('/').slice(0, -1).join('/'), linkToCheck.split('/').pop(), 'index.html'),
                      // Try flattened structure (remove middle directories)
                      path.join(distPath, linkToCheck.split('/')[1], linkToCheck.split('/').slice(2).join('-'), 'index.html'),
                      path.join(distPath, linkToCheck.split('/')[1], linkToCheck.split('/').slice(2).join('-') + '.html'),
                      // Try just the last part
                      path.join(distPath, linkToCheck.split('/')[1], linkToCheck.split('/').pop(), 'index.html'),
                      path.join(distPath, linkToCheck.split('/')[1], linkToCheck.split('/').pop() + '.html')
                    ] : []
                  ];
                  
                  const exists = possiblePaths.some(p => fs.existsSync(p));
                  
                  if (!exists) {
                    const relativePath = path.relative(process.cwd(), file);
                    errors.push(`❌ Broken internal link: ${href} in ${relativePath}`);
                    
                    if (verbose) {
                      logger.warn(`  Checked paths: ${possiblePaths.slice(0, 5).join(', ')}${possiblePaths.length > 5 ? '...' : ''}`);
                    }
                  }
                }
              }
              
              // Check external links if enabled
              if (checkExternal && (href.startsWith('http://') || href.startsWith('https://'))) {
                try {
                  const controller = new AbortController();
                  const timeoutId = setTimeout(() => controller.abort(), timeout);
                  
                  const response = await fetch(href, { 
                    method: 'HEAD',
                    signal: controller.signal,
                    headers: {
                      'User-Agent': 'Mozilla/5.0 (compatible; Astro-Link-Checker/1.0)'
                    }
                  });
                  
                  clearTimeout(timeoutId);
                  
                  if (!response.ok) {
                    const relativePath = path.relative(process.cwd(), file);
                    if (response.status >= 400 && response.status < 500) {
                      errors.push(`❌ Broken external link: ${href} (${response.status}) in ${relativePath}`);
                    } else {
                      warnings.push(`⚠️  External link warning: ${href} (${response.status}) in ${relativePath}`);
                    }
                  }
                } catch (error) {
                  const relativePath = path.relative(process.cwd(), file);
                  if (error instanceof Error && error.name === 'AbortError') {
                    warnings.push(`⚠️  External link timeout: ${href} in ${relativePath}`);
                  } else {
                    warnings.push(`⚠️  Failed to check external link: ${href} in ${relativePath}`);
                  }
                }
              }
            }
          }
          
          // Write to log file if specified
          if (logFile) {
            const logData = {
              timestamp: new Date().toISOString(),
              basePath,
              totalLinks,
              totalFiles: htmlFiles.length,
              errors: errors.length,
              warnings: warnings.length,
              brokenLinks: errors,
              warningLinks: warnings
            };
            
            const logPath = path.resolve(logFile);
            const logDir = path.dirname(logPath);
            
            // Ensure log directory exists
            if (!fs.existsSync(logDir)) {
              fs.mkdirSync(logDir, { recursive: true });
            }
            
            fs.writeFileSync(logPath, JSON.stringify(logData, null, 2));
            logger.info(`📄 Link check results saved to: ${logPath}`);
          }
          
          // Report results
          if (verbose || warnings.length > 0) {
            warnings.forEach(warning => logger.warn(warning));
          }
          
          if (errors.length > 0) {
            logger.error('❌ Link check failed:');
            errors.forEach(error => logger.error(`  ${error}`));
            
            if (failOnError) {
              throw new Error(`Found ${errors.length} broken links`);
            }
          } else {
            logger.info(`✅ All links are valid! Checked ${totalLinks} links in ${htmlFiles.length} HTML files`);
          }
          
        } catch (error) {
          logger.error('Error during link checking:', error);
          if (failOnError) {
            throw error;
          }
        }
      }
    }
  };
}
