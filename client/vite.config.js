import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,      // Changes dev server port to localhost:3000
    open: true,      // Automatically opens browser on server start
  }
})