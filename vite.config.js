import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://d1krvzwx5oquy1.cloudfront.net',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, 'https://d1krvzwx5oquy1.cloudfront.net'),
      }
    }
  },
  plugins: [react()],
})
