<template>
    <div>
       <h1>Post project</h1>
       <div class="container">
            <div class="input-container">
                <label for="id">Project ID</label>
                <input type="text" name="Id" v-model="postData.projectid">
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
const headers = {
  headers: {
    // 'application/json' is the modern content-type for JSON, but some
    // older servers may use 'text/json'.
    // See: http://bit.ly/text-json
    "Authorization" : "eyJraWQiOiJZT0FCQ1o5Y2NlbWN4amlqWWZJV2VpSHp0WTBZT1NMcUprUHgxT25uRWRFPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJmZTMzZTYxMS0xMDE4LTRkYTYtYjdhYy1hNzcyMzNhZTMzMDIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLXdlc3QtMi5hbWF6b25hd3MuY29tXC91cy13ZXN0LTJfMnZCQjQ2MlU5IiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjpmYWxzZSwiY29nbml0bzp1c2VybmFtZSI6ImFkbWluIiwib3JpZ2luX2p0aSI6IjE2ZDlhNzNhLWY4ZTMtNDdiNi04NjVhLWIzMWVjYTljNjAwMSIsImF1ZCI6IjQzbWN0OGZwNTNmNHVhMzUzZm5obHVsOTZtIiwiZXZlbnRfaWQiOiIyOGU5OWIzOC0yODc5LTQ1YmEtYmVhMi04YjJjZTg2NjQyZjEiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTY3ODYxMDczMSwicGhvbmVfbnVtYmVyIjoiKzQ4Njk1NTc3NDMzIiwiZXhwIjoxNjc4NjE0MzMxLCJpYXQiOjE2Nzg2MTA3MzEsImp0aSI6IjQ5NWQxMTZhLWU2NGEtNDEyZC04ZThlLTdjOWRiZTYyYjNlYyIsImVtYWlsIjoibWFpbGluZ2JvdEBnbWFpbC5jb20ifQ.jsddo73elMjeprvIppyZqeh49i2WLXyyeff2hG7YUkOKDMDPbXE7oX3_T2hzwU3Nq04CZyBkHoyzpt0wTAjx_wtnRjBRRcOkdfN4RQERbXbAJSVSbCoxsYqp05CwK879l5ZNunPrD3Ov0Lkp3n7js3zLBf0cXrIFu7Z_vXicV7AAf2f0nXfvR2TEHZjawQHEtBuahSyQxjEO8VrsaKmoXvsi-PS335FNBc8SfCPKTzVRDQtADu16Os16e0m_yZBbAVJuuI0OzlqPUbT0LYyMc5hVh4lTH9iH_x1rvHTxxHaXKS2uYaR8kUyC_sUUU0kOI3W6390QDhbrV8UF67LW6w"
  }
};

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