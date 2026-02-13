/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "54.163.30.23",
        pathname: "/media/**",
      },
      {
        protocol: "http",
        hostname: "34.228.55.22",
        pathname: "/media/**",
      },
      {
        protocol: "http",
        hostname: "3.90.78.102",
        pathname: "/media/**",
      },
    ],
  },
};

module.exports = nextConfig;
