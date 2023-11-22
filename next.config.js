/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["assets.bayut.com", "www.indusre.com"],
    minimumCacheTTL: 1500000,
  },
  experimental: {
    serverActions: true,
  },
  // swcMinify: true
};

module.exports = nextConfig;
