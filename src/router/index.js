import { createRouter, createWebHistory } from 'vue-router'
import GaleriaView from '../views/GaleriaView.vue'

const routes = [
  {
    path: '/',
    name: 'GaleriaView',
    component: GaleriaView
  },
  {
    path: '/producto/:idProducto',
    name: 'MuestraProducto',
    component: () => import('../views/MuestraProducto.vue')
  },
  {
     path: '/LoginView',
     name: 'LoginView',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
     path: '/CompraView',
     name: 'CompraView',
    component: () => import('../views/CompraView.vue')
  },
  {
     path: '/CarritoView',
     name: 'CarritoView',
    component: () => import('../views/CarritoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
