import { defineConfig } from 'vite'

export default defineConfig({
  build: {
      outDir: 'dist',
  },
  publicDir: 'src/assets',
  server: {
    port: 3000,
  },
})