/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'frontend',
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    loader: 'akamai',
    path: ''
  }
}

module.exports = nextConfig
