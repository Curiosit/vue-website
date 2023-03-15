<template>
    
    <div class="button-container">
                    <div :class="this.selector === '' ? 'projects-button-selected' : 'projects-button'">
                        <a href="./all">All</a>
                    </div>
                    <div :class="this.selector === 'aec' ? 'projects-button-selected' : 'projects-button'">
                        <a href="./AEC">AEC</a>
                    </div>
                    <div :class="this.selector === 'it' ? 'projects-button-selected' : 'projects-button'">
                        <a href="./IT">IT</a>
                    </div>
                    <div :class="this.selector === 'rese' ? 'projects-button-selected' : 'projects-button'">
                        <a href="./RESE">Research</a>
                    </div>
                    <div :class="this.selector === 'press' ? 'projects-button-selected' : 'projects-button'">
                        <a href="./PRESS">Press</a>
                    </div>
                    
                </div>


<div class="main-container">
    <div class="projects-card" v-for="(items, index) in query" v-bind:key="items">
        <h2>{{query[index].title}}</h2>
        <img :src="query[index].image" alt="">
        <p class="about">{{query[index].about}}</p>
        <div class="links">
            
            <a :href="query[index].link2" target="_blank"><img src="../assets/link.png" alt=""></a>

        </div>
        

    </div>

</div>

    







</template>

<script>
import axios from 'axios'




export default {
    data(){
        return{
            lambdaReturnData: {},
            query: '',
            
        }
    },
    props: ['q'],
    methods:{
        GetProjects(){
            axios.get('https://q7a2hdiu85.execute-api.us-west-2.amazonaws.com/production/getprojects').then(response => {
                
                this.lambdaReturnData = response.data;
                
                this.selector = "";
                if (this.q == "all") {
                        this.selector = "";
                        
                }
                else {
                        this.selector = this.q.toLowerCase();
                }
                this.query = this.lambdaReturnData.Items.filter(x => x.tag.toLowerCase().includes(this.selector));
                
                console.log(this.selector);
                
                
                //console.log(this.q);
                
            }).catch(err=>{
                console.log(err);
            })
            return this.query;
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
        justify-content:center;
        row-gap: 10px;
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
        flex-basis: 30%;
        background-color: white;
        border-radius: 25px;
        padding:25px;
        box-shadow: rgba(0,0,0,0.21) 0px 3px 8px;
        width: 30%;
        
    }

    .projects-card img{
        height: 15rem;  
        border-radius: 15px;

    }

    .about {
        text-align: justify;
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


    .projects-button-selected {
        background-color: rgb(52, 52, 52);
        box-shadow: rgba(0,0,0,0.21) 0px 3px 8px;
        padding: 10px;
        margin: 5px;
        border-radius: 15px;

    }
    .projects-button-selected a{
        color:#ffffff;
        text-decoration: none;
        
        font-size: 15px;
        
    }
    .projects-button-selected :hover {
        color:#494949;

    }
    @media screen and (max-width: 1200px) {
            
            .projects-card img{
            height: 12rem;  
            border-radius: 15px;
    
        }
            .links img{
            height: 2rem;
            padding: 5px;
            margin: 5px;
        }
        .projects-card{
        
        flex-basis: 51%
        
        
    }
        }
    @media screen and (max-width: 800px) {
            
        .projects-card img{
        height: 10rem;  
        border-radius: 15px;

    }
    .links img{
            height: 2rem;
            padding: 5px;
            margin: 5px;
        }
        .projects-card{
        
        flex-basis: 80%
        
        
    }
    }
</style>