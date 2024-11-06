import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // by default staleTimes is set to 0 (not client/browser cache) in next15.
  // I set it to 30 seconds to avoid revalidation of the cache as most of the data does not change frequently.
  // For data caching and revalidating (posts, comments, follow and etc) I am using react query.

  experimental: {
    staleTimes: {
      dynamic: 30,
    },
  },

  //  for lucia-auth
  serverExternalPackages: ["@node-rs/argon2"],
};

export default nextConfig;
