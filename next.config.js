/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  distDir: 'docs',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;