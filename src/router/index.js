import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import ScreenCaptureview from '../views/ScreenCapture.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/capture',
      name: 'screen-capture',
      component: ScreenCaptureview
    },

  ]
})

export default router
