import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // ESLint configuration is now handled separately via .eslintrc or eslint.config.js
  // Removed eslint config as it's deprecated in Next.js 16+
};

export default nextConfig;
