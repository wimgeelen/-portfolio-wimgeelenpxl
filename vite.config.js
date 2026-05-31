import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/-portfolio-wimgeelenpxl/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
}) 