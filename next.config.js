/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_GH_PAGES ? "" : "/lotus-next",
  output: "export",
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
