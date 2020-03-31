<template>
    <section class="hero is-fullheight" id="home">
        <SocialIcons />
        <div class="hero-head">
            <vue-particles
                color="#dedede"
                :particleOpacity="0.7"
                :particlesNumber="100"
                shapeType="circle"
                :particleSize="4"
                linesColor="#dedede"
                :linesWidth="1"
                :lineLinked="true"
                :lineOpacity="0.4"
                :linesDistance="150"
                :moveSpeed="3"
                :hoverEffect="true"
                hoverMode="grab"
                :clickEffect="true"
                clickMode="push"
            >
            </vue-particles>
        </div>
        <div class="hero-body">
            <div class="container">
                <p class="subtitle subtitle1">
                    <span
                        v-for="(letter, position) in greeting"
                        v-bind:key="position"
                        class="letter"
                        >{{ letter }}</span
                    >
                </p>
                <p class="title">
                    <span
                        v-for="(letter, position) in name"
                        v-bind:key="position"
                        class="letter"
                        >{{ letter }}</span
                    >
                </p>
                <p class="subtitle subtitle2">
                    <span
                        v-for="(letter, position) in subtitle"
                        v-bind:key="position"
                        class="letter"
                        >{{ letter }}</span
                    >
                </p>
                <div class="btn-div">
                    <PortfolioButton
                        v-if="typeWriterDone"
                        :title="portfolio_btn_title"
                    >
                    </PortfolioButton>
                </div>
            </div>
        </div>
        <img src="@/assets/programmer-4.png" class="hero-img" />
    </section>
</template>

<script>
import SocialIcons from './Social-Icons';
import PortfolioButton from './Portfolio-Button';

export default {
    name: 'Hero',

    components: {
        SocialIcons,
        PortfolioButton,
    },

    data() {
        return {
            greeting: [],
            name: [],
            subtitle: [],
            typeWriterDone: false,
            portfolio_btn_title: 'See My Work',
            screenSize: null,
        };
    },

    mounted() {
        this.initTypeWriter();
        //this.toggleRubberband();
        this.setScreenSize();
        //this.initMobile();
    },

    methods: {
        async initTypeWriter() {
            let vm = this;
            let greetingMsg = "Hello, I'm";
            let nameTitle = 'Freinet  Brutus';
            let subtitleMsg = 'Full Stack Developer';

            vm.typeWriter(greetingMsg.split(''), vm.greeting)
                .then(() => {
                    return vm.typeWriter(nameTitle.split(''), vm.name);
                })
                .then(() => {
                    return vm.typeWriter(subtitleMsg.split(''), vm.subtitle);
                })
                .then(() => {
                    vm.typeWriterDone = true;
                });
        },

        async typeWriter(data, prop) {
            // eslint-disable-next-line no-unused-vars
            return new Promise((resolve, reject) => {
                for (let i = 0; i < data.length; i++) {
                    setTimeout(function() {
                        prop.push(data[i]);
                        if (prop.length === data.length) {
                            resolve('done');
                        }
                    }, i * 100);
                }
            });
        },

        /*toggleRubberband(){
               $('.letter').hover( function() {
                   $(this).addClass('animated')
                   $(this).addClass('rubberBand');
               }, function () {
                   $(this).removeClass('animated');
                   $(this).removeClass('rubberBand');
               });
            },*/

        setScreenSize() {
            this.screenSize = window.screen.width;
            console.log(this.screenSize);
        },
    },
};
</script>

<style scoped>
/* Extra small devices */
@media only screen and (min-width: 320px) {
    .letter:hover {
        cursor: pointer;
        color: #238293;
    }

    .subtitle1 .letter:nth-child(1),
    .subtitle1 .letter:nth-child(9),
    .title .letter:nth-child(4),
    .title .letter:nth-child(10),
    .subtitle2 .letter:nth-child(6) {
        color: #238293 !important;
    }

    .hero {
        background-color: #000;
        overflow: auto;
    }
    .hero-body {
        top: 16rem;
        position: absolute;
        left: 3%;
        z-index: 1;
    }
    .hero-body .container {
        position: relative;
        min-height: 100%;
    }
    .subtitle {
        color: #fff !important;
        font-family: 'Economica', sans-serif;
        font-size: 2rem;
    }
    .title {
        color: #fff !important;
        font-family: 'Economica', sans-serif;
        font-size: 3.5rem;
    }
    .subtitle2 {
        color: #f2f2f2 !important;
        font-family: 'Economica', sans-serif;
        font-size: 2rem;
    }
    .hero-head {
        display: none;
    }
    .hero-img {
        width: 16rem;
        height: 16rem;
        position: absolute;
        right: 2.5rem;
        top: 3rem;
        z-index: 0;
    }
}

/* Small devices */
@media only screen and (min-width: 360px) {
    .hero-body {
        top: 20rem;
        position: absolute;
        left: 1.5rem;
        z-index: 1;
    }

    .hero-body .container {
        position: relative;
        min-height: 100%;
    }
    .subtitle {
        color: #fff !important;
        font-family: 'Economica', sans-serif;
        font-size: 2rem;
    }
    .title {
        color: #fff !important;
        font-family: 'Economica', sans-serif;
        font-size: 3.5rem;
    }
    .subtitle2 {
        color: #f2f2f2 !important;
        font-family: 'Economica', sans-serif;
        font-size: 2rem;
    }
    .hero-head {
        display: none;
    }
    .hero-img {
        width: 20rem;
        height: 20rem;
        position: absolute;
        right: 1.5rem;
        top: 3rem;
        z-index: 0;
    }
}
/** Medium Small Devices */
@media only screen and (min-width: 375px) {
    .hero-body {
        top: 20rem;
        bottom: 1%;
        position: absolute;
        left: 2.5rem;
        z-index: 1;
    }
    .hero-body .container {
        position: relative;
        min-height: 100%;
    }
    .subtitle {
        color: #fff !important;
        font-family: 'Economica', sans-serif;
        font-size: 2rem;
    }
    .title {
        color: #fff !important;
        font-family: 'Economica', sans-serif;
        font-size: 3.5rem;
    }
    .subtitle2 {
        color: #f2f2f2 !important;
        font-family: 'Economica', sans-serif;
        font-size: 2rem;
    }
    .hero-head {
        display: none;
    }
    .hero-img {
        width: 20rem;
        height: 20rem;
        position: absolute;
        right: 1.5rem;
        top: 3rem;
        bottom: 2rem;
        z-index: 0;
    }
}

@media only screen and (min-width: 375px) and (max-height: 576px) {
    .hero-body {
        top: 18rem;
        bottom: 1%;
        position: absolute;
        left: 2.5rem;
        z-index: 1;
    }
    .hero-body .container {
        position: relative;
        min-height: 100%;
    }
    .subtitle {
        color: #fff !important;
        font-family: 'Economica', sans-serif;
        font-size: 2rem;
    }
    .title {
        color: #fff !important;
        font-family: 'Economica', sans-serif;
        font-size: 3.5rem;
    }
    .subtitle2 {
        color: #f2f2f2 !important;
        font-family: 'Economica', sans-serif;
        font-size: 2rem;
    }
    .hero-head {
        display: none;
    }
    .hero-img {
        width: 16rem;
        height: 16rem;
        position: absolute;
        right: 4rem;
        top: 3rem;
        bottom: 2rem;
        z-index: 0;
    }
}

/** Iphone X */
@media only screen and (min-height: 812px) {
    .hero-body {
        top: 25rem;
        position: absolute;
        left: 1.5rem;
        z-index: 1;
        height: auto;
    }
    .hero-body .container {
        position: relative;
        min-height: 100%;
    }
    .subtitle {
        color: #fff !important;
        font-family: 'Economica', sans-serif;
        font-size: 2rem;
    }
    .title {
        color: #fff !important;
        font-family: 'Economica', sans-serif;
        font-size: 3.5rem;
    }
    .subtitle2 {
        color: #f2f2f2 !important;
        font-family: 'Economica', sans-serif;
        font-size: 2rem;
    }
    .hero-head {
        display: none;
    }
    .hero-img {
        width: 23rem;
        height: 23rem;
        position: absolute;
        right: 0.5rem;
        top: 5rem;
        bottom: 2rem;
        z-index: 0;
    }
}

/** Large Small Devices */
@media only screen and (min-width: 400px) {
    .hero-body {
        top: 20rem;
        position: absolute;
        left: 3rem;
        z-index: 1;
    }
    .hero-body .container {
        position: relative;
        min-height: 100%;
    }
    .subtitle {
        color: #fff !important;
        font-family: 'Economica', sans-serif;
        font-size: 2rem;
    }
    .title {
        color: #fff !important;
        font-family: 'Economica', sans-serif;
        font-size: 3.5rem;
    }
    .subtitle2 {
        color: #f2f2f2 !important;
        font-family: 'Economica', sans-serif;
        font-size: 2rem;
    }
    .hero-head {
        display: none;
    }
    .hero-img {
        width: 18rem;
        height: 18rem;
        position: absolute;
        right: 4rem;
        top: 3rem;
        z-index: 0;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .hero-body {
        top: 10rem;
        position: absolute;
        left: 3rem;
        z-index: 1;
    }
    .hero-body .container {
        position: relative;
        min-height: 100%;
        top: 5rem;
    }
    .subtitle {
        color: #fff !important;
        font-family: 'Economica', sans-serif;
        font-size: 2rem;
    }
    .title {
        color: #fff !important;
        font-family: 'Economica', sans-serif;
        font-size: 3.5rem;
    }
    .subtitle2 {
        color: #f2f2f2 !important;
        font-family: 'Economica', sans-serif;
        font-size: 2rem;
    }
    .hero-head {
        position: relative;
        display: none;
    }
    .hero-img {
        width: 25rem;
        height: 25rem;
        position: absolute;
        right: 0.8rem;
        top: 10rem;
        bottom: 2rem;
        z-index: 0;
    }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 1024px) {
    .hero {
        /* background-color: #1D1D1D;*/
        background-color: #000;
    }
    .title {
        color: #fff !important;
        font-family: 'Economica', sans-serif;
        font-size: 5rem;
    }
    .subtitle {
        color: #fff !important;
        font-family: 'Economica', sans-serif;
        font-size: 3rem;
    }
    .subtitle2 {
        color: #f2f2f2 !important;
        font-family: 'Economica', sans-serif;
        font-size: 3rem;
    }

    .letter:hover {
        cursor: pointer;
        color: #238293;
    }

    .subtitle1 .letter:nth-child(1),
    .subtitle1 .letter:nth-child(9),
    .title .letter:nth-child(4),
    .title .letter:nth-child(10),
    .subtitle2 .letter:nth-child(6) {
        color: #238293 !important;
    }

    .hero-head {
        position: relative;
        display: block;
    }

    .hero-body {
        top: 5rem;
        position: absolute;
        left: 1rem;
    }
    .hero-body .container {
        position: relative;
        min-height: 100%;
        top: 5rem;
    }

    .columns .column {
        width: 100% !important;
    }

    .hero-img {
        width: 30rem;
        height: 30rem;
        position: absolute;
        right: 3rem;
        top: 5rem;
    }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .hero {
        /* background-color: #1D1D1D;*/
        background-color: #000;
    }
    .title {
        color: #fff !important;
        font-family: 'Economica', sans-serif;
        font-size: 6rem;
    }
    .subtitle {
        color: #fff !important;
        font-family: 'Economica', sans-serif;
        font-size: 3rem;
    }
    .subtitle2 {
        color: #f2f2f2 !important;
        font-family: 'Economica', sans-serif;
        font-size: 3rem;
    }

    .letter:hover {
        cursor: pointer;
        color: #238293;
    }

    .subtitle1 .letter:nth-child(1),
    .subtitle1 .letter:nth-child(9),
    .title .letter:nth-child(4),
    .title .letter:nth-child(10),
    .subtitle2 .letter:nth-child(6) {
        color: #238293 !important;
    }

    .hero-head {
        position: relative;
        display: block;
    }

    .hero-body {
        top: 6rem;
        position: absolute;
        left: 4rem;
    }
    .hero-body .container {
        position: relative;
        min-height: 100%;
        top: 6rem;
    }

    .columns .column {
        width: 100% !important;
    }

    .hero-img {
        width: 40rem;
        height: 40rem;
        position: absolute;
        right: 3rem;
        top: 2rem;
    }
}

/** super large screens */
@media only screen and (min-width: 1800px) {
    .hero {
        /* background-color: #1D1D1D;*/
        background-color: #000;
    }
    .title {
        color: #fff !important;
        font-family: 'Economica', sans-serif;
        font-size: 8rem;
    }
    .subtitle {
        color: #fff !important;
        font-family: 'Economica', sans-serif;
        font-size: 4rem;
    }
    .subtitle2 {
        color: #f2f2f2 !important;
        font-family: 'Economica', sans-serif;
        font-size: 4rem;
    }

    .letter:hover {
        cursor: pointer;
        color: #238293;
    }

    .subtitle1 .letter:nth-child(1),
    .subtitle1 .letter:nth-child(9),
    .title .letter:nth-child(4),
    .title .letter:nth-child(10),
    .subtitle2 .letter:nth-child(6) {
        color: #238293 !important;
    }

    .hero-head {
        position: relative;
        display: block;
    }

    .hero-body {
        top: 13rem;
        position: absolute;
        left: 16rem;
    }
    .hero-body .container {
        position: relative;
        min-height: 100%;
        top: 6rem;
    }

    .columns .column {
        width: 100% !important;
    }

    .hero-img {
        width: 50rem;
        height: 50rem;
        position: absolute;
        right: 5rem;
        top: 5rem;
    }
}
</style>
