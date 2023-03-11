import { createRouter, createWebHistory } from 'vue-router'

import PostProject from '../components/PostProject.vue'
import MainCard from '../components/MainCard.vue'
import Projects from '../components/ProjectsCard.vue'
import AuthCard from '../components/AuthCard.vue'


const routes = [
  {
    path: '/home',
    name: 'Home',
    Component: MainCard


  },
  {
    path: '/',
    name: 'Home',
    Component: MainCard


  },
  {
    path: '/projects',
    name: 'Home',
    Component: Projects


  },
  {
    path: '/post',
    name: 'Post',
    component: PostProject
  },
  {
    path: '/authcard',
    name: 'AuthCard',
    component: AuthCard
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
