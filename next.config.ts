/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // necessary for next export
  },
  trailingSlash: true,
  basePath: "/yogasoul",
};

export default nextConfig;
