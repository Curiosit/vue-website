import { createRouter, createWebHistory } from 'vue-router'

import PostProject from '../components/PostProject.vue'
import MainCard from '../components/MainCard.vue'
//import Projects from '../components/ProjectsCard.vue'
import AuthCard from '../components/AuthCard.vue'
import {Auth} from 'aws-amplify';

const routes = [
  {
    path: '/home',
    name: 'Home',
    Component: MainCard


  },
  {
    path: '/post',
    name: 'Post',
    component: PostProject,
    meta: {auth: true}
  },
  {
    path: '/auth',
    name: 'Auth',
    component: AuthCard
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeResolve((to,from,next)=>{
  if(to.meta.auth){
    console.log("This route is protected")
    Auth.currentAuthenticatedUser().then(()=>{
      next()
    }).catch(()=>{
      console.log("User not authenticated")
      next({
        path: '/auth'
      })
    })
  }else{
    next()
  }
})

export default router
