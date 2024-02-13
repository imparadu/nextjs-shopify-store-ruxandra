/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.shopify.com'],
  },
  experimental: {
    scrollRestoration: true,
  },
}

export default nextConfig