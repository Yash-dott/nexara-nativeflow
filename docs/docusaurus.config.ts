// @ts-check
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
    title: '@nexara/nativeflow',
    tagline: 'Beautiful, responsive documentation with modern UI',
    url: 'https://nexara-nativeflow-docs.onrender.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config
    organizationName: 'Nexara',
    projectName: 'nativeflow',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    scripts: [
        {
            src: "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js",
            async: true,
            "data-name": "BMC-Widget",
            "data-cfasync": "false",
            "data-id": "YashElseStrain",
            "data-description": "Support me on Buy me a coffee!",
            "data-message": "",
            "data-color": "#40DCA5",
            "data-position": "Right",
            "data-x_margin": "18",
            "data-y_margin": "18",
        }
    ],
    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/Yash-dott/nexara-nativeflow-docs/edit/main/docs/'
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        plugins: [
            [
                '@docusaurus/plugin-sitemap',
                {
                    changefreq: 'weekly',
                    priority: 0.5,
                    filename: 'sitemap.xml',
                },
            ],
        ],
        metadata: [{ name: 'robots', content: 'index, follow' }],
        algolia: {
            appId: '4RSF636H2L',
            apiKey: '75b7ca1d8b118988396720478a29be80',
            indexName: 'nexara-nativeflow-onrender',
            contextualSearch: false
        },
        navbar: {
            title: 'Nexara',
            logo: {
                alt: 'Docs Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Docs',
                },
                // { to: '/blog', label: 'Blog', position: 'left' },
                {
                    href: 'https://github.com/Yash-dott/nexara-nativeflow',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            // style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Tutorial',
                            to: '/docs/getting-started',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'linkedIn',
                            href: 'https://www.linkedin.com/in/yash-kumar-jha-8396a7255',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        // {
                        //     label: 'Blog',
                        //     to: '/blog',
                        // },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/Yash-dott/nexara-nativeflow',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Nexara, Inc. All rights reserved.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: false,
            respectPrefersColorScheme: true,
        },
        docs: {
            sidebar: {
                // hideableSidebar: true,
            },
        },
    } satisfies Preset.ThemeConfig,
};

module.exports = config; 