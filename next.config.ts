import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({ extension: /\.mdx?$/ });

const config: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
};

export default withMDX(config);
