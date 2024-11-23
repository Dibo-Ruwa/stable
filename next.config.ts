/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
  typescript: {
    // Temporarily set to true while we fix the types
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;