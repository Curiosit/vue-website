import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import {
    applyPolyfills,
    defineCustomElements,
} from '@aws-amplify/ui-components/loader';
  
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
  
applyPolyfills().then(() => {
    defineCustomElements(window);
});

import { Auth } from 'aws-amplify';
Auth.currentSession()
  .then((data) => {
    const id = data.getIdToken().getJwtToken();
    console.log(data.getIdToken());
    console.log(id)
  })
  .catch((err) => console.log(err));
 



createApp(App).use(router).mount('#app')
