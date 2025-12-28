/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_BACKEND_URL: process.env.REACT_APP_BACKEND_URL,
  },
  // If you need to expose it as NEXT_PUBLIC_ for client-side access without 'env' map:
  // but mapping it here is safer if you want to keep using REACT_APP_ prefix.
};

module.exports = nextConfig;
