
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration for the React frontend
export default defineConfig({
  plugins: [react()],
  // Proxy API requests to the Express backend so we avoid CORS issues in development
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
})