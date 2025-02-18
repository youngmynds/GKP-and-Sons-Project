import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                hostname: "**",
            },
        ],
    },
};

export default nextConfig;
