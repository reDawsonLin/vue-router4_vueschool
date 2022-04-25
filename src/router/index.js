import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/destination/:id/:slug',
      name: 'destination.show',
      component: () => import('@/views/DestinationShow.vue')
    },
  ],

  // 這個選項可以改變 router-link active時，要顯示什麼 class name
  // linkActiveClass: "shalala-active"
})

export default router