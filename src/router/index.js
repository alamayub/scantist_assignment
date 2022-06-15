import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', name: 'Home', component: Home,
    meta: {
      title: 'Home - Scantist',
      metaTags: [
        { name: 'description', content: 'Scantist home page description' },
        { property: 'og:description', content: 'Scantist home page description' }
      ]
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
