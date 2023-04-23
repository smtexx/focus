/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  distDir: 'docs',
  assetPrefix: 'https://smtexx.github.io/focus',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
