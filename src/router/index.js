import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)
const Pokemon = () => import(/* webpackChunkName: "pokemon" */ '@/views/PokemonView.vue');
const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
      path: '/:name',
      name: 'PokemonView',
      component: Pokemon,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router