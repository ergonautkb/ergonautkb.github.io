// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Ergonaut Keyboards",
  tagline:
    "Unlock Comfort in Every Keystroke - Your Guide to Ergonaut Keyboards!",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://ergonautkb.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ergonautkb", // Usually your GitHub org/user name.
  projectName: "ergonautkb.github.io", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/ergonautkb/ergonautkb.github.io/tree/main",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/social-card.jpg",
      navbar: {
        title: "Ergonaut Keyboards",
        logo: {
          alt: "Ergonaut Keyboards logo",
          src: "img/ast.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "docsSidebar",
            position: "left",
            label: "Docs",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/ergonautkb",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Ergonaut One",
                to: "/docs/keyboards/ergonaut-one/intro",
              },
              {
                label: "Gateron Low Profile Switches",
                to: "/docs/switches/gateron-low-profile",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Telegram",
                href: "https://ergonautkb.t.me",
              },
              {
                label: "Telegram (ru)",
                href: "https://ergonautkb_ru.t.me",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/ergonautkb",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ergonaut Keyboards, Built with Docusaurus.`,
      },
    }),
};

module.exports = config;
