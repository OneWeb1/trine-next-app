// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: "/(.*)", // Это правило будет применяться ко всем маршрутам
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, max-age=0, must-revalidate", // Отключение кэша
          },
        ],
      },
    ];
  },
};
