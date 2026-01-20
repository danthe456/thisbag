import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    // 1. Permitimos el host específico que te da el error
    allowedHosts: [
      '510e2b105f62.ngrok-free.app',
      '.ngrok-free.app' // Esto permite cualquier subdominio de ngrok
    ],
    // 2. Desactivamos la verificación estricta del host (esto suele ser el tiro de gracia al error)
    host: true,
    strictPort: true,
    hmr: {
      host: '510e2b105f62.ngrok-free.app',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})