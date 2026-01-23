/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",       // HTML estático
  images: {
    unoptimized: true,    // para SSG puro
  },
};

module.exports = nextConfig;
