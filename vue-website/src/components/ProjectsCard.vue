<template>
    
    <div class="button-container">
                    <div class="projects-button">
                        <a href="">All</a>
                    </div>
                    <div class="projects-button">
                        <a href="">AEC</a>
                    </div>
                    <div class="projects-button">
                        <a href="">IT</a>
                    </div>
                    <div class="projects-button">
                        <a href="">Research</a>
                    </div>
                    <div class="projects-button">
                        <a href="">Press</a>
                    </div>
                    
                </div>

    
<div class="main-container">
    <div class="projects-card" v-for="(items, index) in lambdaReturnData.Items" v-bind:key="items">
        <h2>{{lambdaReturnData.Items[index].title}}</h2>
        <img :src="lambdaReturnData.Items[index].image" alt="">
        <p>{{lambdaReturnData.Items[index].about}}</p>
        <div class="links">
            <a :href="lambdaReturnData.Items[index].link1" target="_blank"><img src="../assets/github.png" alt=""></a>
            <a :href="lambdaReturnData.Items[index].link2" target="_blank"><img src="../assets/link.png" alt=""></a>

        </div>
        

    </div>

</div>






</template>

<script>
import axios from 'axios'


import jsonData from "/projects.json"
export default {
    data(){
        return{
            projectData: jsonData,
            lambdaReturnData: {}
        }
    },
    methods:{
        GetProjects(){
            axios.get('https://q7a2hdiu85.execute-api.us-west-2.amazonaws.com/production/getprojects').then(response => {
                
                this.lambdaReturnData = response.data;
            }).catch(err=>{
                console.log(err);
            })

        }
    },
    mounted(){
        this.GetProjects();
    }
}
</script>

<style scoped>
    .main-container{
        display: flex;
        justify-content: center;
        align-items:center;
        flex-wrap: wrap;
    }
    .button-container{
        margin-top: 0,3%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        
        
        
    }
    .button-container :hover {
    background-color: rgb(52, 52, 52);
    color:#d5d5d5;
    
    }
    .projects-button{
        background-color: white;
        box-shadow: rgba(0,0,0,0.21) 0px 3px 8px;
        padding: 10px;
        margin: 5px;
        border-radius: 15px;

    }
    .projects-button a{
        color:#494949;
        text-decoration: none;
        
        font-size: 15px;
        
    }
    .projects-button :hover {
        color:#ffffff;

    }


    .projects-card{
        margin:10px;
        flex-wrap: 0 0 40%;
        background-color: white;
        border-radius: 25px;
        padding:25px;
        box-shadow: rgba(0,0,0,0.21) 0px 3px 8px;


    }

    .projects-card img{
        height: 20rem;  
        border-radius: 15px;

    }

    .links{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
    }

    .links img{
        height: 2rem;
        padding: 5px;
        margin: 5px;
    }
</style>