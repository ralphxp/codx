// vite.config.js
import { defineConfig } from "vite";
export default defineConfig({
  build: {
    // generate .vite/manifest.json in outDir
    manifest: true,
    rollupOptions: {
      input: '/views/js/main.jsx'
    },
    server: {
      origin: "http://127.0.0.1:8000",
    },
  },
});
