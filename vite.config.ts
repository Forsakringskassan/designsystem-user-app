import fs from "node:fs/promises";
import { defineConfig } from 'vite'
import { vitePlugin as apimockPlugin } from "@forsakringskassan/apimock-express";
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ command }) => {
  const base = command === 'serve' ? '/' : '/designsystem-user-app/'
  
  // Use environment variable to determine which HTML file to use for production builds
  const isProdBuild = process.env.BUILD_MODE === 'production'
  const htmlFile = isProdBuild ? 'index.prod.html' : 'index.html'
  
  return {
    base,
    plugins: [
      vue(),
      apimockPlugin([
        { url: "/api/template", dir: "node_modules/@forsakringskassan/template-api/dist/mock/api/template/" },
      ]),
      {
        name: "fk:hack-do-not-do-this",
        transformIndexHtml: {
          order: "pre",
          async handler() {
            return await fs.readFile(htmlFile, "utf8");
          },
        },
      },
    ],
  }
})
