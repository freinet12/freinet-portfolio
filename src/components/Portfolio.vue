<template>
    <section id="portfolio">
        <header class="has-text-centered">
            <h1>Some of My Latest Work</h1>
            <div class="container project-type-container">
                <nav class="level">
                    <div class="level-item has-text-centered">
                        <div class="project-type-wrapper active" id="all">
                            <p class="heading">TOTAL</p>
                            <p class="title">ALL</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div class="project-type-wrapper" id="full-stack">
                            <p class="heading">TOTAL</p>
                            <p class="title">FULL-STACK</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div class="project-type-wrapper" id="front-end">
                            <p class="heading">TOTAL</p>
                            <p class="title">FRONT-END</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div class="project-type-wrapper" id="back-end">
                            <p class="heading">TOTAL</p>
                            <p class="title">BACK-END</p>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        <div class="wrapper">
            <div class="container projects-grid">
                <div class="columns is-multiline is-mobile">
                    <div
                        class="column is-full-mobile is-half-tablet  is-one-third-widescreen is-one-hird-fullhd"
                        v-for="(card, x) in cards"
                        v-bind:key="x"
                    >
                        <div class="card">
                            <b-carousel
                                :animated="animated"
                                :has-drag="drag"
                                :autoplay="autoPlay"
                                :pause-info="pauseInfo"
                            >
                                <b-carousel-item
                                    v-for="(carousel, i) in card.images"
                                    :key="i"
                                >
                                    <div class="card-image">
                                        <figure class="image is-4by3">
                                            <img
                                                :src="carousel"
                                                alt="Placeholder image"
                                            />
                                        </figure>
                                    </div>
                                </b-carousel-item>
                            </b-carousel>
                            <!--<figure class="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                            </figure>-->

                            <div class="card-header">
                                <p class="card-header-title">
                                    {{ card.title }}
                                </p>
                            </div>
                            <div class="card-content">
                                <div class="content">
                                    {{ card.content }}
                                </div>
                            </div>
                            <footer class="card-footer">
                                <a
                                    href="#"
                                    class="card-footer-item"
                                    v-for="(item, y) in card.footer_content"
                                    v-bind:key="y"
                                    >{{ item }}</a
                                >
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Portfolio',

    data() {
        return {
            carousel: 0,
            animated: 'fade',
            drag: false,
            autoPlay: false,
            pauseHover: false,
            pauseInfo: false,
            repeat: false,
            pauseType: 'is-primary',
            interval: 3000,

            cards: [
                {
                    title: 'Some Title',
                    content:
                        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, numquam? Exercitationem hic rem dicta eius recusandae vitae dolorem delectus asperiores excepturi tempore laborum, veniam ratione perspiciatis alias esse aliquid nulla.',
                    footer_content: ['Preview', 'View on Github'],
                    images: [
                        'https://bulma.io/images/placeholders/1280x960.png',
                        'https://bulma.io/images/placeholders/1280x960.png',
                        'https://bulma.io/images/placeholders/1280x960.png',
                    ],
                },
                {
                    title: 'Some Title',
                    content:
                        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, numquam? Exercitationem hic rem dicta eius recusandae vitae dolorem delectus asperiores excepturi tempore laborum, veniam ratione perspiciatis alias esse aliquid nulla.',
                    footer_content: ['Preview', 'View on Github'],
                    images: [
                        'https://bulma.io/images/placeholders/1280x960.png',
                        'https://bulma.io/images/placeholders/1280x960.png',
                        'https://bulma.io/images/placeholders/1280x960.png',
                    ],
                },
                {
                    title: 'Some Title',
                    content:
                        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, numquam? Exercitationem hic rem dicta eius recusandae vitae dolorem delectus asperiores excepturi tempore laborum, veniam ratione perspiciatis alias esse aliquid nulla.',
                    footer_content: ['Preview', 'View on Github'],
                    images: [
                        'https://bulma.io/images/placeholders/1280x960.png',
                        'https://bulma.io/images/placeholders/1280x960.png',
                        'https://bulma.io/images/placeholders/1280x960.png',
                    ],
                },
                {
                    title: 'Some Title',
                    content:
                        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, numquam? Exercitationem hic rem dicta eius recusandae vitae dolorem delectus asperiores excepturi tempore laborum, veniam ratione perspiciatis alias esse aliquid nulla.',
                    footer_content: ['Preview', 'View on Github'],
                    images: [
                        'https://bulma.io/images/placeholders/1280x960.png',
                        'https://bulma.io/images/placeholders/1280x960.png',
                        'https://bulma.io/images/placeholders/1280x960.png',
                    ],
                },
                {
                    title: 'Some Title',
                    content:
                        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, numquam? Exercitationem hic rem dicta eius recusandae vitae dolorem delectus asperiores excepturi tempore laborum, veniam ratione perspiciatis alias esse aliquid nulla.',
                    footer_content: ['Preview', 'View on Github'],
                    images: [
                        'https://bulma.io/images/placeholders/1280x960.png',
                        'https://bulma.io/images/placeholders/1280x960.png',
                        'https://bulma.io/images/placeholders/1280x960.png',
                    ],
                },
                {
                    title: 'Some Title',
                    content:
                        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, numquam? Exercitationem hic rem dicta eius recusandae vitae dolorem delectus asperiores excepturi tempore laborum, veniam ratione perspiciatis alias esse aliquid nulla.',
                    footer_content: ['Preview', 'View on Github'],
                    images: [
                        'https://bulma.io/images/placeholders/1280x960.png',
                        'https://bulma.io/images/placeholders/1280x960.png',
                        'https://bulma.io/images/placeholders/1280x960.png',
                    ],
                },
                {
                    title: 'Some Title',
                    content:
                        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, numquam? Exercitationem hic rem dicta eius recusandae vitae dolorem delectus asperiores excepturi tempore laborum, veniam ratione perspiciatis alias esse aliquid nulla.',
                    footer_content: ['Preview', 'View on Github'],
                    images: [
                        'https://bulma.io/images/placeholders/1280x960.png',
                        'https://bulma.io/images/placeholders/1280x960.png',
                        'https://bulma.io/images/placeholders/1280x960.png',
                    ],
                },
                {
                    title: 'Some Title',
                    content:
                        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, numquam? Exercitationem hic rem dicta eius recusandae vitae dolorem delectus asperiores excepturi tempore laborum, veniam ratione perspiciatis alias esse aliquid nulla.',
                    footer_content: ['Preview', 'View on Github'],
                    images: [
                        'https://bulma.io/images/placeholders/1280x960.png',
                        'https://bulma.io/images/placeholders/1280x960.png',
                        'https://bulma.io/images/placeholders/1280x960.png',
                    ],
                },
                {
                    title: 'Some Title',
                    content:
                        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, numquam? Exercitationem hic rem dicta eius recusandae vitae dolorem delectus asperiores excepturi tempore laborum, veniam ratione perspiciatis alias esse aliquid nulla.',
                    footer_content: ['Preview', 'View on Github'],
                    images: [
                        'https://bulma.io/images/placeholders/1280x960.png',
                        'https://bulma.io/images/placeholders/1280x960.png',
                        'https://bulma.io/images/placeholders/1280x960.png',
                    ],
                },
            ],
        };
    },
};
</script>

<style scoped>
#portfolio {
    font-family: 'Economica', sans-serif;
    height: auto;
}

#portfolio header {
    background-color: #238293;
    min-height: 400px;
    padding-top: 2rem;
    padding-bottom: 2rem;
}

header h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
}

.wrapper {
    background-color: #fff;
    padding-top: 2rem;
}

.projects-grid .card {
    border-radius: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.projects-grid .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.card-image {
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
}
.card-image img {
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
}
.card-image {
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
}
.card-image img {
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
}

.projects-grid {
    position: relative;
    bottom: 10rem;
}
.project-type-container {
    padding-top: 3rem;
}

.project-type-wrapper {
    cursor: pointer;
}
.project-type-wrapper .heading {
    color: #fff;
}
.project-type-wrapper:hover {
    border-bottom: 3px solid orange !important;
}

.active {
    border-bottom: 3px solid orange !important;
}

.active .heading {
    color: #000;
}

.active .title {
    color: #fff;
}

@media only screen and (max-width: 425px) {
    .project-type-wrapper .title {
        font-size: 1.5rem !important;
    }
}

@media screen and (max-width: 850px) {
    .projects-grid {
        position: relative;
        bottom: 5rem;
    }

    .projects-grid .card {
        border-radius: 1rem;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        margin-left: 4%;
        margin-right: 4%;
    }
    .project-type-container {
        padding-top: 1rem;
    }

    #portfolio header {
        background-color: #238293;
        min-height: 400px;
        padding-top: 1rem;
        padding-bottom: 2rem;
    }
}
</style>
