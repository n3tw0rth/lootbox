/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    console.log("Rewrites called");

    return [
      {
        source: '/test',
        destination: '/run/',
      },
    ]
  },
}



module.exports = nextConfig
