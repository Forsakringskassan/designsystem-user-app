import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: (process.env.APP_BASE_PATH == "false" ? undefined : "/designsystem-user-app/"),
  plugins: [
    vue(),
  ],
})
