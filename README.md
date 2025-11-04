# Block Open Source

This repository contains the source code for [opensource.block.xyz](https://opensource.block.xyz), the open source home of Block, Inc. (NYSE: XYZ).

At Block, we Default to Open. We believe that open source and open protocols are essential to our purpose of Economic Empowerment.

Block is a global technology company that builds tools to empower businesses and individuals to participate in the economy. Our open source initiatives span across payments, blockchain, security, and developer tools, reflecting our commitment to building in the open and contributing to the broader technology community.

## About This Site

This site serves as the central hub for Block's open source projects and efforts, featuring:

- **Project Showcase**: Discover our open source projects and contributions
- **Blog**: Technical articles, announcements, and insights from Block engineers
- **Resources**: Documentation and guides for working with Block's open source projects

## Build Instructions

This site is built with [Astro](https://astro.build), a modern static site framework. It is forked from the Block Open Source [Docs Site Kickstarter](https://github.com/block/docs-site-kickstarter).

### Prerequisites

- Node.js v18 or higher (Tested w/ `24`)
- [pnpm](https://pnpm.io) package manager

### Development

1. Clone the repository:
   ```bash
   git clone https://github.com/block/opensource.block.xyz.git
   cd opensource.block.xyz
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm run dev
   ```

4. Open your browser and navigate to `http://localhost:4321`

### Production Build

To create a production build:

```bash
pnpm run build
```

The built site will be output to the `dist/` directory.

To preview the production build locally:

```bash
pnpm run preview
```

## Deployment

This site is automatically deployed to production using GitHub Actions.

- **Production Branch**: `production`
- **Live Site**: [opensource.block.xyz](https://opensource.block.xyz)

When changes are pushed to the `production` branch, a GitHub Action workflow automatically builds and deploys the site to the live environment.

### Deployment Workflow

1. Make changes on a feature branch
2. Create a pull request to the `production` branch
3. After review and merge, the GitHub Action triggers automatically
4. The site is built and deployed to opensource.block.xyz

## Contributing

We welcome contributions! Please see our contributing guidelines for more information.

## License

Licensed under the [Apache 2.0 License](LICENSE).
