/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["assets.bayut.com", "www.indusre.com", "indusspeciality.com"],
    minimumCacheTTL: 150000,
  },
  distDir: "build",
  swcMinify: true,
};

module.exports = nextConfig;
