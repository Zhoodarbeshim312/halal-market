const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "3.90.78.102",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "54.163.30.23",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "34.228.55.22",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
