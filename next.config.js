/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['blog.adaptimmo.com', 'upload.wikimedia.org'],
  },
};

module.exports = nextConfig;
