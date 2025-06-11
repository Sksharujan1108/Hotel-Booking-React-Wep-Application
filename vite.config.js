/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
  },
  server: {
    port: 3000,
    open: true, // Open the Browser Automatically when the server starts
  },
})
