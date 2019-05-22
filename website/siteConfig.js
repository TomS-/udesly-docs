/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.

const siteConfig = {
  title: 'Udesly', // Title for your website.
  tagline: 'Udesly Documentation',
  url: 'https://docs.udesly.com', // Your website URL
  baseUrl: '/', // Base URL for your project */
  
  // Used for publishing and more
  projectName: 'udesly',
  organizationName: '',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'wordpress-setup', label: 'Webflow to WordPress'},
    {doc: 'shopify-setup', label: 'Webflow to Shopify'}
  ],

  /* path to images for header/footer */
  headerIcon: '',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#2f52ff',
    secondaryColor: '#0d0d0d',
  },

  docsUrl: '',

  fonts: {
    myFont: [
      "Poppins",
      "Sans Serif"
    ],
    myOtherFont: [
      "Poppins",
      "Sans Serif"
    ]
  },
  docsSideNavCollapsible: true,
  
  stylesheets: [
    "https://fonts.googleapis.com/css?family=Poppins|Leckerli+One"
  ],

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Eclipse SRL`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [''],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/udesly.jpg',
  twitterImage: 'img/udesly.jpg',

  scrollToTop: true,
  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
