/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,   // 👈 disables Next.js optimizer
  },
}

module.exports = nextConfig
