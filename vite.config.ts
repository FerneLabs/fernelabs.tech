import { fileURLToPath, URL } from 'node:url'
import Sitemap from 'vite-plugin-sitemap'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import games from './src/assets/games.json'

const dynamicRoutes = games.map(game => `/game/${game.id}`)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    Sitemap({ hostname: 'https://fernelabs.tech', dynamicRoutes, readable: true, }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
