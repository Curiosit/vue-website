<template>
    <div class="wrapper">
    <div class="post-container">
       
       <div class="container-label">
        <h1> </h1>
            <div class="input-container">
                <br>
                <label for="Id">Project ID: </label>
                
            </div>
            <div class="input-container">
                <label for="Title">Title: </label>
                
            </div>
            <div class="input-container">
                <label for="id">About: </label>
                
            </div>
            <div class="input-container">
                <label for="id">Image: </label>
                
            </div>
            <div class="input-container">
                <label for="Link1">Link 01: </label>
                
            </div>
            <div class="input-container">
                <label for="Link2">Link 02: </label>
                
            </div>

            
       </div>
       <div class="container-post">
        <h1>Post project</h1>
            <div class="input-container">
                
                <input type="text" name="Id" v-model="postData.projectid">
            </div>
            <div class="input-container">
                
                <input type="text" name="Title" v-model="postData.title">
            </div>
            <div class="input-container">
                
                <input type="text" name="About" v-model="postData.about">
            </div>
            <div class="input-container">
                
                <input type="text" name="Image" v-model="postData.image">
            </div>
            <div class="input-container">
                
                <input type="text" name="Link1" v-model="postData.link1">
            </div>
            <div class="input-container">
                
                <input type="text" name="Link2" v-model="postData.link2">
            </div>

            <button type="Submit" @click="PostProject()">Post</button>
       </div>
    </div>
</div>

</template>

<script>
import axios from 'axios';

var headers ="";

import { Auth } from 'aws-amplify';
Auth.currentSession()
  .then((data) => {
    const id = data.getIdToken().getJwtToken();
    //console.log(id);
    headers = {
            headers: {
                "Authorization" : id
            }
    }
    
  })
  .catch((err) => console.log(err));

export default {
    data(){
        return{
            postData: {
                projectid: '',
                title: '',
                about: '',
                image: '',
                link1: '',
                link2: ''
            }
        }
    },
    methods:{
        PostProject(){
            axios.post('https://q7a2hdiu85.execute-api.us-west-2.amazonaws.com/production/postprojects', this.postData, headers).then(response => {
                
                console.log(response)
            }).catch(err => {
                
                console.log(err);
            })
        }
    }

}
</script>

<style scoped>
    .wrapper{
        display: flex;
        justify-content: center;

    }
    .post-container{
        
        background-color: rgb(235, 235, 235);
        border-width: 10px;
        border-radius: 50px;
        width: 60%;
        text-decoration: none;
        box-shadow: rgba(0,0,0,0.21) 0px 3px 8px;
        margin: 2%;
        padding: 2%;
        display: flex;

        align-items:center;
        flex-wrap: wrap;
    }

    .container-label{


        width: 30%;
        justify-content:right;

        
    }
    .container-post{
        width: 60%;
        justify-content: left;

        
    }
    .input-container {
        padding: 0.2rem;

        

    }

</style>