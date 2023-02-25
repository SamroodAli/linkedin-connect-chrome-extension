import { defineConfig } from "vite";
import { crx } from "@crxjs/vite-plugin";
import manifest from "./manifest.json";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        css: "./src/extension.css"
      }
    }
  },
  plugins: [crx({ manifest })]
});
