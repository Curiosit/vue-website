<template>
  
    
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

body {
  margin: 0;
  background-color: #efefef;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3b3b3b;
  margin-top: 60px;
  background-color: #efefef;
}
</style>

<!-- credits:
<a href="https://www.flaticon.com/free-icons/instagram" title="instagram icons">Instagram icons created by Freepik - Flaticon</a>


-->
