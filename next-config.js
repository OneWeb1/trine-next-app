module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "trine-game.online",
        port: "",
        pathname: "/avatar/**",
      },
    ],
    minimumChacheTTL: 1500000,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      console.log("Server-side configuration:");
    } else {
      console.log("Client-side configuration:");
    }
    console.log(JSON.stringify(config.images, null, 2));
    return config;
  },
};
