/** @type {import('next').NextConfig} */

require("dotenv").config({
  path: `.env.local`,
});

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"], // Add this to allow images from Sanity's CDN
  },
};
