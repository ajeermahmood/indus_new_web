/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["assets.bayut.com", "www.indusre.com"],
    unoptimized: true,
  },
  output: "export",
  trailingSlash: true,
};

module.exports = nextConfig;
