import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: [
      "/Users/julien/Documents/Alt/05 - Projet/project_triome/front/extra_school_app/node_modules/.vite/deps/chunk-2LRERH76.js?v=8ff62efe",
    ],
  },
});
