import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: ['apple-touch-icon.png'],
      manifest: {
        name: 'Igor GPS',
        short_name: 'GPS',
        description: 'Una aplicación de Geolocalización UTM y LatLng para mi Abuelo Igor.',
        theme_color: '#21c2e1',
        background_color: '#ffffff',
        lang: 'es',
        start_url: 'https://orlandobricenob.github.io/igor-gps/',
        icons: [
          {
            "src": "pwa-icons/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": "pwa-icons/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": "pwa-icons/icon-128x128.png",
            "sizes": "128x128",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": "pwa-icons/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": "pwa-icons/icon-152x152.png",
            "sizes": "152x152",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": "pwa-icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": "pwa-icons/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": "pwa-icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable any"
          }
        ]
      }
    })
  ],
  base: '/igor-gps/',
  build: {
    outDir: './docs'
  }
})
