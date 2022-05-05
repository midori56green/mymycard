import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TaskCardView from '../views/TaskCardView.vue'
import CollectionView from '../views/CollectionView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/card',
    name: 'TaskCardView',
    component: TaskCardView
  },
  {
    path: '/collection',
    name: 'CollectionView',
    component: CollectionView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
