// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Officail_webiste/', // <--- important!
  plugins: [react()],
})
