import { createRouter, createWebHistory } from 'vue-router'
import ProjectsCard from '../components/ProjectsCard.vue'
import PostProject from '../components/PostProject.vue'
import MainCard from '../components/MainCard.vue'
//import Projects from '../components/ProjectsCard.vue'
import AuthCard from '../components/AuthCard.vue'
import {Auth} from 'aws-amplify';

const routes = [
  {
    path: '/',
    name: 'Mateusz Płoszaj-Mazurek',
    Component: MainCard
  },
  {
    path: '/projects/:q',
    name: 'Mateusz Płoszaj-Mazurek / Projects',
    component: ProjectsCard,
    props: true,

  },
  
  {
    path: '/post',
    name: 'Mateusz Płoszaj-Mazurek / Post',
    component: PostProject,
    meta: {auth: true}
  },
  {
    path: '/auth',
    name: 'Mateusz Płoszaj-Mazurek / Auth',
    component: AuthCard
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});


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
