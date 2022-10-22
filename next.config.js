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
});


const nextConfig = withPWA({
  reactStrictMode: true,
    swcMinify: true,
});
module.exports = nextConfig;