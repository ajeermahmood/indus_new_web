/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["assets.bayut.com", "www.indusre.com"],
    unoptimized: true,
  },
  output: "export",
};

module.exports = nextConfig;
