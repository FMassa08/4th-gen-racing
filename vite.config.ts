import { defineConfig } from "vite";
import vinext from "vinext";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  environments: {
    rsc: {
      build: {
        rolldownOptions: {
          // vinext's runtime manifests are emitted beside the Worker entrypoint.
          output: { chunkFileNames: "[name]-[hash].js" },
        },
      },
    },
  },
  plugins: [
    vinext({
      // Cloudflare emits the Worker bundle; Next.js keeps its standalone output.
      nextConfig: { output: undefined },
    }),
    cloudflare({
      viteEnvironment: {
        name: "rsc",
        childEnvironments: ["ssr"],
      },
    }),
  ],
});
