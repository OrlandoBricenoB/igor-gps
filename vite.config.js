import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA()
  ],
  base: '/igor-gps/',
  build: {
    outDir: './docs'
  }
})
