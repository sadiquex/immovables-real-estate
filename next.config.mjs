/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        // port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "livedemo00.template-help.com",
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;
