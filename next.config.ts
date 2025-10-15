import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Permissions-Policy",
    value:
      "geolocation=(), microphone=(), camera=(), interest-cohort=()",
  },
];

const cacheHeaders = [
  {
    key: "Cache-Control",
    value: "public, max-age=31536000, immutable",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        source: "/_next/static/(.*)",
        headers: cacheHeaders,
      },
      {
        source: "/public/(.*)",
        headers: cacheHeaders,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "embla-carousel-react"],
  },
};

export default nextConfig;
