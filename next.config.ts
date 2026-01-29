/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "docs",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
