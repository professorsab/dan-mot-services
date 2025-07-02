import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  "extends": ["next", "next/core-web-vitals"],
  "rules": {
    "react/no-unescaped-entities": "off"
  }
};

export default nextConfig;
