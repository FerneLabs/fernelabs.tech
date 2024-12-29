import { createRouter, createWebHistory } from 'vue-router'
import { app } from '../main'
import HomeView from '../views/HomeView.vue'
import GameView from '../views/GameView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/game/:id',
      name: 'game',
      component: GameView,
    },
    {
      path: '/app/controller-vue',
      name: 'app-controller-vue',
      component: async () => {
        app?.unmount()
        return import('../embedded/controller-vue/controller-vue.js').then(module => module.default)
      }
    },
    {
      path: '/app/tg-controller-vue',
      name: 'app-tg-controller-vue',
      component: async () => {
        app?.unmount()
        return import('../embedded/tg-controller-vue/tg-controller-vue.js').then(module => module.default)
      }
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // For some reason when opening the link with hash, negative top is needed
    if (from.name === undefined && to.hash === '#about') {
      return { el: '#about', top: -500 }
    } else if (to.hash === '#about') {
      return { el: '#about' }
    }
  },
})

export default router
