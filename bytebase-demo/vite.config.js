import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 【关键】这里填你的仓库名，前后都要有斜杠
  base: '/bytebase-demo/',
})