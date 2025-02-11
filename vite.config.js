import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    mimeType: {
      'js': 'text/javascript',
      'jsx': 'text/javascript',
    }
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
})
