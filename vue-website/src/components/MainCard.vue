<template>
    <div class="wrapper">
        <div class="main-container">

            <div class="container-one">
            <div class="profile">
                <a href="/"><img src="../assets/personalphoto-circle.png" alt="Mateusz Płoszaj-Mazurek"></a>
                <h3>Mateusz Płoszaj-Mazurek</h3>
                <p>Professional Problem Solver</p>

            </div>
            <div class="social-links">
                
                <div class="link">
                    <a href="https://github.com/Curiosit" target="_blank">
                        <img src="../assets/github.png" alt="Github">
                        <h2>Git</h2>
                    </a>
                </div>
                
            </div>
            <div class="social-links">
                
                <div class="link">
                    <a href="https://www.linkedin.com/in/mateusz-mazurek/" target="_blank">
                        <img src="../assets/linkedin.png" alt="Linkedin">
                        <h2>LinkedIn</h2>
                    </a>
                </div>
                
            </div>
            <div class="social-links">
                
                <div class="link">
                    <a href="https://www.instagram.com/themazurek/" target="_blank">
                        <img src="../assets/instagram.png" alt="Instagram">
                        <h2>Instagram</h2>
                    </a>
                </div>
                
            </div>
            <div class="social-links">
                
                <div class="link">
                    <a href="https://www.facebook.com/themazurek/">
                        <img src="../assets/facebook.png" alt="Facebook">
                        <h2>Facebook</h2>
                    </a>
                </div>
                
            </div>

            </div>

            <div class="container-two">



                <div class="about-me">
                    <h1>Hello!</h1>
                    <p>My name is Mateusz and I am an architect. I finished my <a href="https://www.researchgate.net/publication/360519981_Cyfrowe_metody_wspomagania_projektowania_architektonicz-nego_a_analiza_sladu_weglowego_budynkow" target="_blank">PhD</a> in 2022, with a dissertation about using Machine Learning for Building Carbon Footprint Optimization. I am working in <a href="https://www.bjerg.nu" target="_blank">Bjerg Arkitektur</a>, where I am consulting in the areas of sustainable architecture, carbon footprint, certification and digital tools. I am also researcher at the <a href="https://www.arch.pw.edu.pl/" target="_blank">Faculty of Architecture</a>, Warsaw University of Technology. I am building this website to train myself in using VUE framework, node.js and other tools.</p>
                    
                </div>
                <h3>IT</h3>
                <div class="technology-section">
                    
                    <div class="logos">
                        <div class="logo"><img src="../assets/it/python.png" alt="Python"><span class="tooltiptext">Python</span></div>
                        <div class="logo"><img src="../assets/it/keras.png" alt="Keras"><span class="tooltiptext">Keras</span></div>
                        <div class="logo"><img src="../assets/it/vue.png" alt="VUE"><span class="tooltiptext">VUE</span></div>
                        <div class="logo"><img src="../assets/it/js.png" alt="JS"><span class="tooltiptext">JS</span></div>
                        <div class="logo"><img src="../assets/it/html-5.png" alt="HTML5"><span class="tooltiptext">HTML5</span></div>
                        <div class="logo"><img src="../assets/it/css-3.png" alt="CSS3"><span class="tooltiptext">CSS3</span></div>
                    </div>

                </div>
                <h3>AEC</h3>
                <div class="technology-section">
                    
                    <div class="logos">
                        <div class="logo"><img src="../assets/aec/grass.png" alt="Grasshopper"><span class="tooltiptext">Grasshopper</span></div>
                        <div class="logo"><img src="../assets/aec/energyplus.png" alt="EnergyPlus"><span class="tooltiptext">EnergyPlus</span></div>
                        <div class="logo"><img src="../assets/aec/lady.png" alt="Ladybug"><span class="tooltiptext">Ladybug</span></div>
                        <div class="logo"><img src="../assets/aec/honey.png" alt="Honeybee"><span class="tooltiptext">Honeybee</span></div>
                        <div class="logo"><img src="../assets/aec/revit.png" alt="Revit"><span class="tooltiptext">Revit</span></div>
                        <div class="logo"><img src="../assets/aec/ifc.png" alt="IFC"><span class="tooltiptext">IFC</span></div>
                        <div class="logo"><img src="../assets/aec/passive.png" alt="CEPH"><span class="tooltiptext">Certified Passive House Designer</span></div>
                        
                    </div>

                </div>
                <h3>Languages</h3>
                <div class="technology-section">
                    
                    <div class="logos">
                        <div class="logo"><img src="../assets/flags/pl.svg" alt="Polish"><span class="tooltiptext">Polish</span></div>
                        <div class="logo"><img src="../assets/flags/gb.svg" alt="English"><span class="tooltiptext">English C2</span></div>
                        <div class="logo"><img src="../assets/flags/dk.svg" alt="Danish"><span class="tooltiptext">Danish B1</span></div>
                        <div class="logo"><img src="../assets/flags/cn.svg" alt="Chinese"><span class="tooltiptext">Chinese A2/HSK2</span></div>
            
                        
                    </div>

                </div>
                
                <div class="button-container">
                    <div class="projects-button">
                        <a href="/projects/all">My Projects</a>
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
        
        border-radius: 50px;
        width: 60%;
        text-decoration: none;
        box-shadow: rgba(0,0,0,0.21) 0px 3px 8px;
        
        
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
    .link img:hover {
        transform: rotate(15deg);
    }
    .profile img:hover{
        transform: rotate(-10deg);
    }

    .container-two{
        
        width: 60%;
        margin: 2%;
        padding: 1%;
        border-radius: 25px;
    }
    .about-me{
        text-align:justify;
        text-decoration: none;
    }
    .about-me a{
        text-decoration: none;
        font-weight: bold;
        color: rgb(52, 52, 52)
    }

    .technology-section{
        text-decoration: none;
    }

    .button-container{
        margin-top: 0.2%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        
        
        
    }
    .button-container :hover {
    background-color: rgb(255, 255, 255);
    color:rgb(52, 52, 52);
    
    }
    .projects-button{
        background-color: rgb(52, 52, 52);
        box-shadow: rgba(0,0,0,0.21) 0px 3px 8px;
        padding: 10px;
        margin: 5px;
        border-radius: 15px;

    }
    .projects-button a{
        color:rgb(255, 255, 255);
        text-decoration: none;
        
        font-size: 15px;
        
    }
    .projects-button :hover {
        color:rgb(52, 52, 52);

    }

    
    .language-button{
        background-color: white;
        box-shadow: rgba(0,0,0,0.21) 0px 3px 8px;
        padding: 10px;
        margin: 5px;
        border-radius: 15px;

    }
    .language-button a{
        text-decoration: none;
        
        font-size: 15px;
        
    }

    .logos img{
        padding: 0.2rem;
        height: 2rem;
        
    }

    
    .logo {
        display: inline-block;
    }
    .logo .tooltiptext {
        visibility: hidden;
        width: 120px;
        margin-top: 40px;
        
        margin-left: -80px;
        background-color: black;
        color: #fff;
        text-align: center;
        padding: 5px 0;
        border-radius: 6px;
 
        /* Position the tooltip text - see examples below! */
        position: absolute;
        z-index: 1;
    }

    /* Show the tooltip text when you mouse over the tooltip container */
    .logo:hover .tooltiptext {
        visibility: visible;
    }
    .logo .tooltiptext::after {
        content: " ";
        position: absolute;
        bottom: 100%;  /* At the top of the tooltip */
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent black transparent;
    }


    @media screen and (max-width: 900px) {
            .main-container {
                width: 95%;
                
            }
            .profile img{
                height: 7rem;
                border-radius: 10%;
            }

    }

    
</style>