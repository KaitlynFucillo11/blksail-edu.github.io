// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Autonomous Underwater Vehicle Challenge",
  tagline: "MIT Beaver Works Summer Institute 2023 - BLKSAIL",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://blksail-edu.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "blksail-edu", // Usually your GitHub org/user name.
  projectName: "blksail-edu.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
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
            "https://github.com/blksail-edu/blksail-edu.github.io/tree/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/blksail-edu/blksail-edu.github.io/tree/main/",
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
      // Replace with your project's social card
      image: "img/AUVC2023.001.png",
      navbar: {
        title: "AUVC",
        logo: {
          alt: "BWSI AUVC Logo",
          src: "img/auvc_icon.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Course",
          },
          { to: "/blog", label: "Announcements", position: "left" },
          {
            href: "https://github.com/blksail-edu",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "AUV Challenge",
            items: [
              {
                label: "Course",
                to: "/docs/intro",
              },
              {
                label: "Announcements",
                to: "/blog",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/blksail-edu",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/blksail",
              },
              {
                label: "blkSAIL",
                href: "https://www.blksail.ai/",
              },
              {
                label: "MIT BWSI",
                href: "https://beaverworks.ll.mit.edu/CMS/bw/bwsi",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} BLKSAIL, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
