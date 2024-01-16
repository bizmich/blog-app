/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.assets.so',
      },
    ],
  },
};

module.exports = nextConfig;
