import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: HomeView},
    {path: '/contributors', name: 'contributors', component: () => import('../views/ContributorsView.vue')},
    {path: '/resources', name: 'resources', component: () => import('../views/ResourcesView.vue')},
    {path: '/news', name: 'news', component: () => import('../views/NewsView.vue')}
  ]
})

export default router
