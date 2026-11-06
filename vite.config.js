import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/My-portfolio-Web/',
  plugins: [react()],
})