import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import WerkplekLeren from '../views/WerkplekLeren.vue'
import Over from '../views/Over.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/werkplek-leren', component: WerkplekLeren },
  { path: '/over', component: Over },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
