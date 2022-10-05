// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
};

module.exports = nextConfig;
