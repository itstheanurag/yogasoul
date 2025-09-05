/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // 🚀 disables optimization
  },
  trailingSlash: true,
  basePath: "/yogasoul", // 👈 your repo name
  assetPrefix: "/yogasoul/", // 👈 must match basePath
};

export default nextConfig;
