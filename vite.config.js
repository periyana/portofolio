import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://periyana.github.io/portofolio/',
  server: {
    hmr: {
      overlay: false, // Disable the HMR error overlay
    },
  },
});
