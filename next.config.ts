/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // needed since GitHub Pages can’t handle Next.js Image Optimization
  },
  trailingSlash: true, // recommended for GitHub Pages to avoid 404s
};

export default nextConfig;
