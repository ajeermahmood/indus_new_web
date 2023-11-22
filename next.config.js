/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["assets.bayut.com", "www.indusre.com", "res.cloudinary.com"],
    // unoptimized: true,
    loader: 'custom',
    path: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/",
  },
  output: "export",
  trailingSlash: true,
  swcMinify: true,
};

module.exports = nextConfig;
