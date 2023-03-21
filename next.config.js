/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.boostingforge.com", "cdn.discordapp.com"],
  },
};

module.exports = nextConfig;
