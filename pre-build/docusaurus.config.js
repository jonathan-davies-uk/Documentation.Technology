// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Technical Documentation',
  /*image: 'img/logos/ts-long@4x.png',*/
  tagline: 'Made by Tech Support, for Tech Support',
  url: 'https://documentation.technology',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logos/favicon.ico',
  organizationName: 'jonathan-davies-uk', // Usually your GitHub org/user name.
  projectName: 'Documentation.Technology', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),          
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

plugins: [
    /*[
      '@docusaurus/plugin-content-docs',
      {
        id: 'Networking',
        path: 'Networking',
        routeBasePath: 'Networking',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
      },
    ],*/
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'Telephony',
        path: 'Telephony',
        routeBasePath: 'Telephony',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'Backups',
        path: 'Backups',
        routeBasePath: 'Backups',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'SSL-Certificates',
        path: 'SSL-Certificates',
        routeBasePath: 'SSL-Certificates',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
      },
    ],
    /*[
      '@docusaurus/plugin-content-docs',
      {
        id: 'messaging',
        path: 'messaging',
        routeBasePath: 'messaging',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
      },
    ],*/
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cyber-security',
        path: 'cyber-security',
        routeBasePath: 'cyber-security',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'blueprints',
        path: 'blueprints',
        routeBasePath: 'blueprints',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'active-directory',
        path: 'active-directory',
        routeBasePath: 'active-directory',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
      },
    ],
],

themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'support_us',
        content: '<div id="color-bar"><div class="color-bar-1"></div><div class="color-bar-2"></div><div class="color-bar-3"></div><div class="color-bar-4"></div><div class="color-bar-5"></div><div class="color-bar-6"></div></div>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },
      colorMode: {
        disableSwitch: true,
      },
      navbar: {
        /*title: 'Technical Documentation',*/
        logo: {
          alt: 'Site Logo',
          src: 'img/logos/ts-long@4x.png',
          srcDark: 'img/logos/ts-long@4x.png',
          target: '_self',
        },
        /**logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },**/
        items: [
          /*{
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Tutorial',
          },*/
          /*{to: '/networking/intro', docId: 'intro', label: 'Networking', position: 'left'},*/
          {to: '/telephony/microsoft-teams/connecting-to-teams', docId: 'intro', label: 'Telephony', position: 'left'},
          {to: '/backups/introduction', docId: 'intro', label: 'Backups', position: 'left'},
          {to: '/SSL-Certificates/using-openssl-to-convert-certificates/convert-ssl-certificates', docId: 'intro', label: 'SSL Certificates', position: 'left'},
          /*{to: '/messaging/intro', docId: 'intro', label: 'Messaging', position: 'left'},*/
          {to: '/cyber-security/dns/protecting-a-parked-domain', docId: 'intro', label: 'Cyber Security', position: 'left'},
          {to: '/active-directory/what-is-active-directory', docId: 'intro', label: 'Active Directory', position: 'left'},
          {to: '/blueprints/intro', docId: 'intro', label: 'Setting up Blueprints', position: 'right'},
          {type: 'search', position: 'right'},
          /*{to: '/blog', label: 'Blog', position: 'right'},*/
          /*{
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },*/
        ],
      },
      footer: {
        style: 'dark',
        links: [
          /*{
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },*/
          {
            title: 'About Me',
            items: [
              {
                label: 'My CV',
                href: 'https://www.jonathandavies.uk',
              },
              {
                label: 'My GitHub',
                href: 'https://github.com/jonathan-davies-uk',
              },
              {
                label: 'My LinkedIn',
                href: 'https://linkedin.com/in/spud/',
              },
              {
                label: 'My Microsoft Profile',
                href: 'https://docs.microsoft.com/en-gb/users/spud/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Technical Documentation, built with love for the craft.`,
      },
      /*prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },*/
    }),
};

module.exports = config;
