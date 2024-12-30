import { createRouter, createWebHistory } from 'vue-router'
import { app } from '../main'
import HomeView from '../views/HomeView.vue'
import GameView from '../views/GameView.vue'
import AppView from '../views/AppView.vue'

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
    // {
    //   path: '/app/controller-vue',
    //   name: 'app-controller-vue',
    //   component: async () => {
    //     app?.unmount()
    //     return import('../embedded/controller-vue/controller-vue.js').then(module => module.default)
    //   }
    // },
    {
      path: '/app/:id',
      name: 'app',
      component: AppView
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
