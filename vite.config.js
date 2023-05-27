import {defineConfig} from 'vite'
import {svelte} from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        login_page: './index.html',
        replenish_page: './replenish.html',
        identification_page: './identification.html',
      },
    },
  },
  plugins: [svelte()],
})
