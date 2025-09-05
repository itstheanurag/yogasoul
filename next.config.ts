/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isProd ? "/yogasoul" : "",
  assetPrefix: isProd ? "/yogasoul/" : "",
  env: {
    NEXT_PUBLIC_ASSET_PREFIX: isProd
      ? "/yogasoul"
      : process.env.NEXT_PUBLIC_ASSET_PREFIX || "",
  },
};

export default nextConfig;
