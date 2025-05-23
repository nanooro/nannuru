const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias["@ui"] = path.resolve(__dirname, "src/components/ui");
    return config;
  },
};

module.exports = nextConfig;
