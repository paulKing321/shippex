/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

//   images: {
//     domains: ['www.w3.org', 'svgjs.dev', 'res.cloudinary.com', 'www.w3schools.com', 'shopazhub.s3.eu-west-2.amazonaws.com', 'shopazhub.s3.amazonaws.com'],
//   },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
};

module.exports = nextConfig;