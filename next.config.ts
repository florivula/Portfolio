import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};


export default nextConfig;