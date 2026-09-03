import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: process.env.VERCEL ? "/" : process.env.VITE_BASE_PATH || "/",
  plugins: [react(), tailwindcss()],
});
