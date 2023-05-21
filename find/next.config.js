/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["https://media.timeout.com"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.timeout.com",
        port: "",
        pathname: "/images/105859738/image.jpg",
      },
    ],
  },
};

module.exports = nextConfig;
