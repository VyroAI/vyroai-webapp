/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.vyroai.com"],
  },
};

module.exports = nextConfig;
