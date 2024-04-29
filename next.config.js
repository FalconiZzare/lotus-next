/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/lotus-next",
  output: "export",
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
