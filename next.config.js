/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "34.228.55.22",
        port: "", // если порт не нужен
        pathname: "/media/**",
        // domains: ["34.228.55.22"], // сюда добавляем хост твоей картинки
      },
    ],
  },
};

module.exports = nextConfig;
