/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  distDir: "dist",
};

module.exports = nextConfig
