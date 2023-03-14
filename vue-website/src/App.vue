<template>
  <nav>
  </nav>
  <MainCard/>
  <router-view/>

  

</template>
<script>
import MainCard from './components/MainCard.vue'



import { onAuthUIStateChange } from '@aws-amplify/ui-components';

export default {
  name: 'Mateusz Płoszaj-Mazurek',
  components: {
    MainCard,
    
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
body {
  background-color: #ffffff;
        
        background-size: 10px 10px;
        background-image: repeating-linear-gradient(45deg, #c9c9c9 0, #c9c9c9 1px, #ffffff 0, #ffffff 50%);
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
