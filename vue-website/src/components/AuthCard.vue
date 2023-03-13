<template>
    <div>
    <amplify-authenticator>
                
               
                <amplify-sign-out></amplify-sign-out>
       
        </amplify-authenticator>
</div>
</template>

<script>
import {Auth, Hub} from 'aws-amplify';

export default {
    data(){
        return{
            authenticated: false
        }
    },
    mounted(){
        Auth.currentAuthenticatedUser().then(()=>{
            this.authenticated = true;

        })
        Hub.listen('auth', (data)=>{
            switch(data.payload.event){
                case 'signIn':
                    console.log("The user is signed in!")
                    this.$router.push('post')
                    break;
            }
        })
    }


}

</script>

<style>


</style>