import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import multiPages from 'vite-plugin-multi-pages';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    multiPages({
      // Configuration options for vite-plugin-multi-pages
      pagesDir: './', // Directory where your page components are located
      importMode: 'async', // Import mode for dynamic imports ('sync' or 'async')
    })
  ]
})
