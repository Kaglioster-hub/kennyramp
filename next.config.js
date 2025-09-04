/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    if (dev) config.cache = { type: "memory" }; // evita cache pack.gz su Windows
    return config;
  },
};
module.exports = nextConfig;
