import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ceShi from '../views/ceShi.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ceShi',
    name: 'ceShi',
    component: ceShi
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
