<template>
    <div class="wrapper">
        <div class="main-container">

            <div class="container-one">
            <div class="profile">
                <img src="../assets/personalphoto-circle.png" alt="">
                <h3>Mateusz Płoszaj-Mazurek</h3>
                <p>Professional Problem Solver</p>

            </div>
            <div class="social-links">
                
                <div class="link">
                    <a href="">
                        <img src="../assets/github.png" alt="">
                        <h2>Git</h2>
                    </a>
                </div>
                
            </div>
            <div class="social-links">
                
                <div class="link">
                    <a href="">
                        <img src="../assets/linkedin.png" alt="">
                        <h2>LinkedIn</h2>
                    </a>
                </div>
                
            </div>
            <div class="social-links">
                
                <div class="link">
                    <a href="">
                        <img src="../assets/instagram.png" alt="">
                        <h2>Instagram</h2>
                    </a>
                </div>
                
            </div>
            <div class="social-links">
                
                <div class="link">
                    <a href="">
                        <img src="../assets/facebook.png" alt="">
                        <h2>Facebook</h2>
                    </a>
                </div>
                
            </div>

            </div>

            <div class="container-two">



                <div class="about-me">
                    <h1>About me</h1>
                    <p>PhD in architecture, hobbyist software developer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus laoreet nulla, vitae suscipit mauris auctor non. Nunc eget quam et ipsum molestie tempor. Fusce pulvinar varius risus eu tincidunt. Suspendisse eget venenatis lacus. Aliquam lectus elit, semper eu risus et, suscipit ornare felis. Proin in vestibulum nibh. Cras iaculis, orci volutpat egestas mollis, nisl leo consequat tellus, vitae vehicula nibh massa non ligula. Proin maximus et augue sit amet accumsan. Duis dui tellus, tempor non arcu sit amet, sollicitudin placerat augue.</p>
                </div>
                <div class="technology-section">
                    <h1>Technologies</h1>
                    <div class="logos">
                        <img src="../assets/vue.png" alt="">
                        <img src="../assets/js.png" alt="">
                        <img src="../assets/python.png" alt="">
                        <img src="../assets/html-5.png" alt="">
                        <img src="../assets/css-3.png" alt="">
                    </div>

                </div>

                <div class="button-container">
                    <div class="projects-button">
                        <a href="">My Projects</a>
                    </div>
                    <div class="projects-button">
                        <a href="">Resume</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {



}


</script>

<style scoped>
    .wrapper{
        display: flex;
        justify-content: center;

    }

    img{
        height: 30px;

    }


    .main-container{
        display: flex;
        flex-direction: row;
        background-color:rgb(255, 255, 255);
        border-width: 10px;
        border-radius: 50px;
        width: 60%;
        text-decoration: none;
        
        
    }
    .container-one{
        
        padding: 1%;
        margin: 2%;
        border-radius: 25px;
        width: 30%;
    }
    .profile img{
        height: 10rem;
        border-radius: 50%;
    }

    .link a{
        text-decoration: none;
        color:#2c3e50;
        font-size: 10px;

    }
    .link img{
        height: 2rem;
    }


    .container-two{
        
        width: 60%;
        margin: 2%;
        padding: 1%;
        border-radius: 25px;
    }
    .about-me{
        text-align:justify;
    }

    .technology-section{
        text-decoration: none;
    }

    .button-container{
        margin-top: 5%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        
    }
    .projects-button{
        background-color: white;
        box-shadow: rgba(0,0,0,0.21) 0px 3px 8px;
        padding: 10px;
        margin: 5px;
        border-radius: 15px;

    }
    .projects-button a{
        text-decoration: none;
        color:#2c3e50;
        font-size: 15px;
        
    }

    .logos img{
        padding: 0.2rem;
        height: 2rem;
    }



</style>