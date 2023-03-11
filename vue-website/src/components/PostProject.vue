<template>
    <div>
       <h1>Post project</h1>
       <div class="container">
            <div class="input-container">
                <label for="id">Project ID</label>
                <input type="text" name="Id" v-model="postData.projectId">
            </div>
            <div class="input-container">
                <label for="id">Title</label>
                <input type="text" name="Title" v-model="postData.title">
            </div>
            <div class="input-container">
                <label for="id">About</label>
                <input type="text" name="About" v-model="postData.about">
            </div>
            <div class="input-container">
                <label for="id">Image</label>
                <input type="text" name="Image" v-model="postData.image">
            </div>
            <div class="input-container">
                <label for="Link1">Link 01</label>
                <input type="text" name="Link1" v-model="postData.link1">
            </div>
            <div class="input-container">
                <label for="Link2">Link 02</label>
                <input type="text" name="Link2" v-model="postData.link2">
            </div>

            <button type="Submit" @click="PostProject()">Post</button>
       </div>
  
    </div>

</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            postData: {
                projectId: '',
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
            axios.post('https://q7a2hdiu85.execute-api.us-west-2.amazonaws.com/production/postprojects', this.postData).then(response => {
                console.log(response);

            }).catch(err => {
                console.log(err);
            })
        }
    }

}
</script>

<style>

</style>