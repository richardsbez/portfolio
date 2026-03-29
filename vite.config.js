import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    // Se você estiver usando isso, certifique-se que o Tailwind está no postcss.config.js
    transformer: 'postcss',
    lightningcss: {
      // configurações opcionais
    }
  }
})
