// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Web3on - No-code для Web3',
  favicon: 'images/favicon.ico',
  // Set the production url of your site here
  url: 'https://web3on.ru',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'web3man', // Usually your GitHub org/user name.
  projectName: 'web3on', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru','en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/web3man/web3on/blob/docusaurus/',
          editLocalizedFiles: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {name: 'viewport', content: 'width=device-width'},
        {name: 'description',content: 'Изучение Web3 и прототипирование проектов. Для ВУЗов, школ, стартапов и всех, кому интересны распределенные технологии.'}
      ],
      // Replace with your project's social card
      image: 'img/web3on-youtube.png',
      navbar: {
        title: 'web3on',
        logo: {
          alt: 'web3on',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: 'doc',
            docId: 'legal_info/offer',
            position: 'left',
            label: 'LegalInfo',
          },
          {
            href: 'https://github.com/web3man/web3on',
            label: 'GitHub',
            position: 'right',
          },
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
        {
          title: 'Контакты',
          items: [{label: 'info@web3on.ru', href:"mailto:info@web3on.ru"}]
        },
        {
          title: 'Правовая информация',
          items: [
            {label: 'Публичная оферта', to:"docs/legal_info/offer"},
            {label: 'Политика конфиденциальности', to:"docs/legal_info/privacy_policy"},
            {label: 'Лицензионный договор', to:"docs/legal_info/license_agreement"}
          ]
        }
        ],
        copyright: `© 2023 ООО “Цифровые решения”. Сделано с помощью Docusaurus`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
