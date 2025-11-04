interface Link {
  title: string;
  href: string;
  external?: boolean;
  icon?: string;
}

interface FooterSection {
  title: string;
  links: Link[];
}

export interface FooterBlockOSData {
  logo: string;
  companyName: string;
  description: string;
  sections: FooterSection[];
  copyright: string;
}

export const footerBlockOSData: FooterBlockOSData = {
  logo: "block-open-source/block",
  companyName: "block",
  description: " ",
  sections: [
    {
      title: "Company",
      links: [
        { title: "News", external: true, href: "https://block.xyz/news" },
        { title: "Careers", external: true, href: "https://block.xyz/careers/jobs" },
        { title: "Open Source", external: true, href: "https://block.xyz/open-source" },
        { title: "Investors", external: true, href: "https://investors.block.xyz/overview/default.aspx?_gl=1*1ho038u*_ga*MTcxNDUxMjk5Ni4xNzU1NjI2MzM1*_ga_EM11G73CS9*czE3NTU2NDU2MTAkbzMkZzEkdDE3NTU2NDU4NDYkajYwJGwwJGgw"},
        { title: "Media Kit", external: true, href: "https://block.xyz/mediakit"},
        { title: "Legal", external: true, href: "https://block.xyz/legal"},
        { title: "Privacy", external: true, href: "https://block.xyz/legal/privacy-notice"},
      ]
    },
    {
      title: "Brands",
      links: [
        { title: "Square", href: "https://squareup.com/", external: true, icon: "block-open-source/brands/square" },
        { title: "Cash App", href: "https://cash.app/", external: true, icon: "block-open-source/brands/cash-app" },
        { title: "Afterpay", href: "https://afterpay.com/", external: true, icon: "block-open-source/brands/afterpay" },
        { title: "Tidal", href: "https://tidal.com/", external: true, icon: "block-open-source/brands/tidal" },
        { title: "Bitkey", href: "https://bitkey.world/", external: true, icon: "block-open-source/brands/bitkey" },
        { title: "Proto", href: "https://proto.xyz/", external: true, icon: "block-open-source/brands/proto" },
      ]
    },
    {
      title: "Social",
      links: [
        { title: "X (Twitter)", href: "https://x.com/blockopensource", external: true, icon: "x-twitter" },
        { title: "GitHub", href: "https://github.com/block", external: true, icon: "octicon-github" },
        // { title: "LinkedIn", href: "https://www.linkedin.com/company/block-opensource", external: true, icon: "linkedin" },
        { title: "Discord", href: "https://discord.gg/block-opensource", external: true, icon: "discord" },
      ]
    }
  ],
  copyright: "© 2025 Block, Inc. BLOCK and the Block Logo are trademarks of Block, Inc."
};