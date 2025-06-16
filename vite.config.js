import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
<<<<<<< HEAD
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),
    react()]
=======

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
>>>>>>> a25246287cca7e285eeece21ff41cd16317cffec
})
