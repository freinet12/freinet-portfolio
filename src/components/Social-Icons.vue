<template>
    <section>
        <div class="social-icons-set" id="iconSet">
            <!-- Github -->
            <div class="wrapper">
                <b-tooltip
                    label="Github"
                    type="is-dark"
                    animated
                    position="is-left"
                >
                    <a
                        href="https://github.com/freinet12"
                        target="_blank"
                        class="social-icons"
                    >
                        <i class="fab fa-github"></i>
                    </a>
                </b-tooltip>
            </div>
            <!-- Linkedin -->
            <div class="wrapper">
                <b-tooltip
                    label="Linkedin"
                    type="is-dark"
                    animated
                    position="is-left"
                >
                    <a
                        href="https://www.linkedin.com/in/freinet-brutus-57a465109/"
                        target="_blank"
                        class="social-icons"
                    >
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </b-tooltip>
            </div>
            <!-- Codepen -->
            <div class="wrapper">
                <b-tooltip
                    label="Codepen"
                    type="is-dark"
                    animated
                    position="is-left"
                >
                    <a
                        href="https://codepen.io/freinet12/pens/popular/"
                        target="_blank"
                        class="social-icons"
                    >
                        <i class="fab fa-codepen"></i>
                    </a>
                </b-tooltip>
            </div>
            <!-- Free Code Camp -->
            <b-tooltip
                label="Free Code Camp"
                type="is-dark"
                animated
                position="is-left"
            >
                <a
                    href="https://www.freecodecamp.org/portfolio/freinet12"
                    target="_blank"
                    class="social-icons"
                >
                    <i class="fab fa-free-code-camp"></i>
                </a>
            </b-tooltip>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Social-Icons',
    props: [],
    data() {
        return {};
    },

    mounted() {
        //this.toggleIconColors();
    },

    methods: {
        /*toggleIconColors(){
            window.onscroll = function(){
                let iconSet = document.getElementsByClassName('social-icons');
                if ( (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450)){
                    for (let i = 0; i < iconSet.length; i++){
                        iconSet[i].classList.add("dark-icons");
                    }
                    
                } else{
                    for (let i = 0; i < iconSet.length; i++){
                        iconSet[i].classList.remove("dark-icons");
                    }
                     
                }
            }
        }*/
    },
};
</script>

<style scoped>
.social-icons-set {
    top: 35%;
    background-color: #fff;
    position: fixed;
    right: 0;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border-left: 1.5px solid #ff6224;
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    z-index: 2;
}

.social-icons-set .social-icons {
    margin-bottom: 5%;
    padding: 0.5rem;
    font-size: 1.5rem;
    color: #238293;
}

.wrapper {
    border-bottom: 1px solid #e6e6e6 !important;
}

.social-icons-set .social-icons:hover {
    color: #000;
}

/*.fa-github, .fa-codepen{
        color: #000!important;
    }

    .fa-github:hover, .fa-codepen:hover{
        color: #238293!important; 
    }*/

.dark-icons {
    color: #000 !important;
}
.dark-icons:hover {
    color: #238293 !important;
}

@media screen and (max-width: 1000px) {
    .social-icons-set {
        display: none;
    }
}
</style>
