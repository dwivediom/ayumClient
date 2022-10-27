/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig




const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
    disable: process.env.NODE_ENV === 'development'
});


const nextConfig = withPWA({
  reactStrictMode: true,
    swcMinify: true,
    env: {
      Bport:'http://localhost:5000',
    }



});
module.exports = nextConfig;