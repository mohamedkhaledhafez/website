module.exports = {
  title: "TechFellows",
  tagline:
    "Tech blog & free online guides React, front end",
  url: "https://techfellows.github.io'",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/techfellows.svg",
  organizationName: "techfellows", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "TechFellows",
      logo: {
        alt: "My Site Logo",
        src: "img/techfellows.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Tutorials",
          position: "left",
        },
        {
          to: "docs/algoIntro",
          label: "Algorithms 101",
          position: "left",
        },
        {
          to: "docs/dsIntro",
          label: "Data Structures",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/techfellows/website",
          label: "GitHub",
          position: "right",
        },
        { to: "/about", label: "About us", position: "left" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/techfellows/website",
            },
            {
              label: "Dev.to",
              href: "https://dev.to/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TechFellows.`,
    },
  },
  themes: ["@docusaurus/theme-live-codeblock"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/techfellows/website/edit/master/website/docs",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/techfellows/website/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
