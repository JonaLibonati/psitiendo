
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          "sobre-mi": resolve(__dirname, 'sobre-mi/index.html'),
          enfoque: resolve(__dirname, 'enfoque/index.html'),
          terapias: resolve(__dirname, 'terapias/index.html'),
          testimonios: resolve(__dirname, 'testimonios/index.html'),
        },
      },
    },
  }
)


