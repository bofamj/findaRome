/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
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
        hostname: "img.veenaworld.com",
        port: "",
        pathname:
          "/wp-content/uploads/2022/08/A-Travel-Guide-to-the-Maldives-Things-to-Do-Places-to-Explore-and-the-Best-Season-to-Visit-scaled-e1663098468473.jpg",
      },
      {
        protocol: "https",
        hostname: "cdn.destguides.com",
        port: "",
        pathname:
          "/files/store/itinerary/990/background_image/webp_large_202112291737-fa24970d2b2bf67cee7ec041d0dcb5b3.webp",
      },
      //* property*//
      {
        protocol: "https",
        hostname: "static.independent.co.uk",
        port: "",
        pathname: "/2023/03/24/09/Best%20New%20York%20boutique%20hotels.jpg",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/wikipedia/commons/1/1e/AIMCO_apartment_interior.jpg",
      },
      {
        protocol: "https",
        hostname: "d27k8xmh3cuzik.cloudfront.net",
        port: "",
        pathname:
          "/wp-content/uploads/2017/09/Mango-Beach-Resort-in-Alibaug-OG-ss23092017.jpg",
      },
      {
        protocol: "https",
        hostname: "media-cdn.tripadvisor.com",
        port: "",
        pathname: "/media/vr-splice-j/09/f8/37/f3.jpg",
      },
    ],
  },
};

module.exports = nextConfig;
