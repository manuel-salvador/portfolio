/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "seeklogo.com",
        protocol: "https",
      },
      {
        hostname: "assets.website-files.com",
        protocol: "https",
      },
      {
        hostname: "cdn.cdnlogo.com",
        protocol: "https",
      },
      {
        hostname: "i.ibb.co",
        protocol: "https",
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
