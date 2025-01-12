/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    remotePatterns: [{
      hostname: 'files.stripe.com',
    }]
  }
}

module.exports = nextConfig
