/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASEPATH,
  images: {
    domains: ['via.placeholder.com','tailwindui.com'],
  },
}

export default nextConfig
