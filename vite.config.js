import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: 'esbuild',
    target: "esnext"
  },
  plugins: [react(), svgr()],
})
