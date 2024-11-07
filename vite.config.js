import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['lenis/dist/lenis.css']  // Add this line to externalize the CSS file
    }
  }
})
