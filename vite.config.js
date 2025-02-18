import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react() , tailwindcss()],
  base: "/currencyConverter"  // Ensure this matches your GitHub repo name
})
