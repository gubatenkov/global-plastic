/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['cdn.sanity.io', 'img.youtube.com']
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./scripts/sitemap-generator");
    }
    return config;
  },
};
