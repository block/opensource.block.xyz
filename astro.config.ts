// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { linkChecker } from './integrations/link-checker';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  
  site: 'https://opensource.block.xyz',
  base: '/', 
  
  integrations: [
    icon(),
    mdx({
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
      //extendDefaultPlugins: true
    }), 
    react(),
    linkChecker({
      failOnError: true,           // Fail build on broken links
      checkExternal: false,        // Set to true to check external links  
      exclude: ['#', 'mailto:', 'tel:', 'example.com'],
      timeout: 5000,              // Timeout for external requests
      verbose: false,             // Show warnings even when build succeeds
      logFile: 'link-check-results.json'  // Save results to a JSON file
    })
  ],
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark'
      },
      wrap: true,
      // Remove default theme application
      defaultColor: 'light'
    }
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },
});