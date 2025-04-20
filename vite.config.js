import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { config } from 'dotenv';
// Load environment variables from .env file
config();
// https://vite.dev/config/
export default defineConfig({
  // Your Vite configuration
  define: {
    'process.env': process.env
  },
  plugins: [
    tailwindcss(),
    react()
  ],
})
