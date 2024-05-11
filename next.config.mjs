/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "admin.blazecodes.com",
      "blazecodes.com",
      "system.pradhansaroj.com.np",
      "wwww.blazecodes.com",
      "127.0.0.1",
      "images.unsplash.com",
    ],
  },

  env: {
    EMAIL_JS_SERVICE_ID: process.env.EMAIL_JS_SERVICE_ID,
    EMAIL_JS_PUBLIC_KEY: process.env.EMAIL_JS_PUBLIC_KEY,
    EMAIL_JS_TEMPLATE_ID: process.env.EMAIL_JS_TEMPLATE_ID,
  },
};

export default nextConfig;
