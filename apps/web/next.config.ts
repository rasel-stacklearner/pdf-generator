import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["@repo/ui"],

  basePath: "",
  assetPrefix: "/about",
};

export default nextConfig;
