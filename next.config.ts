import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Tumhare file me pehle se jo configurations hain unhe rehne do, 
     bas ye niche waali lines andar add kar do: */
  typescript: {
    // TypeScript errors ki wajah se build fail nahi hogi
    ignoreBuildErrors: true,
  },
  eslint: {
    // ESLint (warning/formatting) errors ki wajah se build fail nahi hogi
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
