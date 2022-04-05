/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'frontend',
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig
