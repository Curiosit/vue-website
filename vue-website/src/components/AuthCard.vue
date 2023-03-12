<template>
    <div><h1>Auth</h1></div>
    <amplify-authenticator>
                <div>
                My App
                <amplify-sign-out></amplify-sign-out>
                </div>
        </amplify-authenticator>
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