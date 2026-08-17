/// <reference types="vite/client" />
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import { defineConfig } from "vite";
import { resolve } from "path";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import Sitemap from 'vite-plugin-sitemap'

dotenv.config({ path: resolve(__dirname, ".env") });

const VITE_FRONTEND_PORT_COERCED_TO_NUMBER: number = Number(
  process.env.VITE_PORT
);

const configObject = {
  base: process.env.VITE_ROUTING_URL_BASE || "/lj-constructora/",
  plugins: [
    react(),
    TanStackRouterVite(),
    Sitemap({
      hostname: "https://ezekias1337.github.io/lj-constructora/",
      dynamicRoutes: ["/", "/privacy-policy", "/terms-of-service"],
    }),
  ],
  build: {
    sourcemap: true,
  },
  server: {
    port: VITE_FRONTEND_PORT_COERCED_TO_NUMBER,
    host: "0.0.0.0",
  },
};

export default defineConfig(configObject);
