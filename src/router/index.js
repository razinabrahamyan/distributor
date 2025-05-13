import { createRouter, createWebHistory } from 'vue-router'
import Products from "..//pages/dashboard/Products.vue";
import Cart from "@/pages/dashboard/Cart.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'products',
      component: Products,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    }
  ],
})

export default router
