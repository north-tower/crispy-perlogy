import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['i.postimg.cc'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
