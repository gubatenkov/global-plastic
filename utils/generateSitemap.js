const sitemap = require('nextjs-sitemap-generator');
const path = require('path');

sitemap({
  baseUrl: 'https://fastidious-vacherin-1a0ea7.netlify.app',
  pagesDirectory: path.resolve(__dirname, '../public/pages/'),
  targetDirectory: path.resolve(__dirname, '../public/'),
  ignoredExtensions: ['js', 'map', 'json', 'xml', 'png', 'css', 'jpeg', 'jpg', 'icon', 'webp'],
  ignoredPaths: [
    '404',
    'favicon',
    'index',
  ],
  extraPaths: [
    '/'
  ]
})