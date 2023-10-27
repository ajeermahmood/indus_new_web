/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["assets.bayut.com"],
    minimumCacheTTL: 1500000,
  },
};

module.exports = nextConfig;
