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
      {
        protocol: "https",
        hostname: "a.travel-assets.com",
        port: "",
        pathname:
          "/findyours-php/viewfinder/images/res70/507000/507808-istanbul.jpg",
      },
      {
        protocol: "https",
        hostname: "destinationwellknown.com",
        port: "",
        pathname: "/wp-content/uploads/2023/03/where-to-stay-mallorca.webp",
      },
      {
        protocol: "https",
        hostname: "americadomani.com",
        port: "",
        pathname: "/wp-content/uploads/2023/02/rome7th.jpg",
      },
      {
        protocol: "https",
        hostname: "media.tacdn.com",
        port: "",
        pathname: "/media/attractions-splice-spp-674x446/0b/01/a3/55.jpg",
      },
      {
        protocol: "https",
        hostname: "cdn.destguides.com",
        port: "",
        pathname:
          "/files/store/itinerary/990/background_image/webp_large_202112291737-fa24970d2b2bf67cee7ec041d0dcb5b3.webp",
      },
    ],
  },
};

module.exports = nextConfig;
