<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/post">Post</router-link> |
    <router-link to="/projects">Projects</router-link> |
    <router-link to="/authcard">Auth</router-link> |
  </nav>

  <router-view/>


  <MainCard/>
  <ProjectsCard/>

  <div>
    <div v-if="authState !== 'signedin'">You are signed out.</div>
    <amplify-authenticator>
      <div v-if="authState === 'signedin' && user">
        <div>Hello, {{user.username}}</div>
      </div>
      <amplify-sign-out></amplify-sign-out>
    </amplify-authenticator>
  </div>

</template>
<script>
import MainCard from './components/MainCard.vue'
import ProjectsCard from './components/ProjectsCard.vue'


import { onAuthUIStateChange } from '@aws-amplify/ui-components';

export default {
  name: 'AuthStateApp',
  components: {
    MainCard,
    ProjectsCard
  },
  created() {
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData;
    });
  },
  data() {
    return {
      user: undefined,
      authState: undefined,
      unsubscribeAuth: undefined,
    };
  },
  beforeUnmount() {
    this.unsubscribeAuth();
  },



  


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
