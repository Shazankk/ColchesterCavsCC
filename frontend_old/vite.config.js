import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy: {
    "/api": {
      target: "http://localhost:5000", // Backend server URL
      changeOrigin: true, // Change the origin of the host header to the target URL
      secure: false, // If using a self-signed certificate, set this to false
      rewrite: (path) => path.replace(/^\/api/, ""), // Optional: Rewrite the path if needed
    },
  },
});
