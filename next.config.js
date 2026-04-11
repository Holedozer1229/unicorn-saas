/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ Required for some server-side packages (Stripe, Redis, etc.)
  serverExternalPackages: [],

  // ✅ Enable gzip compression
  compress: true,

  // ✅ Remove x-powered-by header (security best practice)
  poweredByHeader: false,

  // ✅ Image optimization config
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  // ✅ Enforce strict builds (fail fast in production)
  eslint: {
    ignoreDuringBuilds: false,
  },

  typescript: {
    ignoreBuildErrors: false,
  },
}

module.exports = nextConfig
