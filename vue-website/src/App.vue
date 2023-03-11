<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/post">Post</router-link> |
    <router-link to="/projects">Projects</router-link> |
  </nav>

  <router-view/>


  <MainCard/>
  <ProjectsCard/>


</template>
<script>
import MainCard from './components/MainCard.vue'
import ProjectsCard from './components/ProjectsCard.vue'
export default {
  name: 'App',
  components: {
    MainCard,
    ProjectsCard
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
