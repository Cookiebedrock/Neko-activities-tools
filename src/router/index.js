import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: () => import( '../components/Welcome.vue')
  },
  {
    path: '/Statistics',
    name: 'Statistics',
    component: () => import( '../components/Statistics.vue')
  },
  {
    path: '/Map',
    name: 'Map',
    component: () => import( '../components/Map.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
