import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/home.vue'
import User from '@/views/user/index.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/user',
    component: User
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
