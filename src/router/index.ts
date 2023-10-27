import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TransactionFormView from '@/views/TransactionFormView.vue'
import CategorieView from '@/views/CategorieView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/new-transaction',
      name: 'new-transaction',
      component: TransactionFormView
    },
    {
      path: '/new-categorie',
      name: 'new-categorie',
      component: CategorieView
    },
  ]
})

export default router
