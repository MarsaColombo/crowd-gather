/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,

  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  },

  poweredByHeader: false,

  images: {
    domains: ["res.cloudinary.com", "cloudinary.com"],
  },
};

module.exports = nextConfig;
