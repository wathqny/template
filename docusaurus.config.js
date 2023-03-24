// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "وثقني",
  tagline: "Dinosaurs are cool",
  favicon: "img/wathqny-icon.svg",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "wathqny", // Usually your GitHub org/user name.
  projectName: "template", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve("esbuild-loader"),
      options: {
        loader: "tsx",
        format: isServer ? "cjs" : undefined,
        target: isServer ? "node12" : "es2017",
      },
    }),
  },
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ar",
    locales: ["ar"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/main.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },

      // Replace with your project's social card
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          background: {
            light: 'rgb(255, 255, 255,.4)',
            dark: 'rgb(50, 50, 50,.4)'
          }
        }
      },
      image: "img/wathqnyog.png",
      navbar: {
        title: "وثقني",
        logo: {
          alt: "شعار وثقني",
          src: "img/wathqny-icon.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "الشرح",
          },
          {to: '/api', label: 'المرجع', position: 'left'},
          {to: "/blog", label: "المدونة", position: "left" },
          {
            href: "https://discord.gg/7NKDpEpSfV",
            className: "pseudo-icon discord-icon",
            position: "right",
          },
          {
            href: "https://github.com/wathqny",
            className: "pseudo-icon github-icon",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "المستندات",
            items: [
              {
                label: "الشرح",
                to: "/docs",
              },
              {
                label: "المرجع",
                to: "/api",
              },
            ],
          },
          {
            title: "المجتمع",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/Edwq4uzrgf",
              },
            ],
          },
          {
            title: "المزيد",
            items: [
              {
                label: "المدونة",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/wathqny",
              },
            ],
          },
        ],
        logo: {
          alt: 'شعار وثقني',
          src: 'img/wathqny.png',
        },
        copyright: `جميع الحقوق محفوظة ${new Date().getFullYear()} مشروع وثقني شركة spices`,
      
      },
      prism: {
        theme: require("./config/lightCodeTheme"),
        darkTheme: require("./config/darkCodeTheme"),
      },
    }),

  plugins: [
    [require.resolve("docusaurus-plugin-image-zoom"),{}],
    [
      require.resolve("docusaurus-plugin-search-local"),
      {
        highlightSearchTermsOnTargetPage: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        path: 'api',
        routeBasePath: 'api',
      },
    ],
  ],
};

module.exports = config;
