import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: HomeView},
    {path: '/contributors', name: 'contributors', component: () => import('../views/ContributorsView.vue')},
    {path: '/resources', name: 'resources', component: () => import('../views/ResourcesView.vue')},
    {path: '/deliverables', name: 'deliverables', component: () => import('../views/ProjDeliverables.vue')}
  ]
})

export default router