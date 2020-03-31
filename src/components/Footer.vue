<template>
    <footer class="footer">
        <img
            src="@/assets/Logo_fb_Vert_white.png"
            alt="Logo"
            id="footer-logo"
        />
        <div class="content has-text-centered">
            <div class="icons">
                <!-- Github -->
                <b-tooltip label="Github" type="is-light" animated>
                    <a
                        href="https://github.com/freinet12"
                        target="_blank"
                        class="icon-bottom-link"
                    >
                        <i class="fab fa-github"></i>
                    </a>
                </b-tooltip>
                <!-- Linkedin -->
                <b-tooltip label="Linkedin" type="is-light">
                    <a
                        href="https://www.linkedin.com/in/freinet-brutus-57a465109/"
                        target="_blank"
                        class="icon-bottom-link"
                    >
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </b-tooltip>
                <!-- Codepen -->
                <b-tooltip label="Codepen" type="is-light">
                    <a
                        href="https://codepen.io/freinet12/pens/popular/"
                        target="_blank"
                        class="icon-bottom-link"
                    >
                        <i class="fab fa-codepen"></i>
                    </a>
                </b-tooltip>
                <!-- Free Code Camp -->
                <b-tooltip label="Free Code Camp" type="is-light">
                    <a
                        href="https://www.freecodecamp.org/portfolio/freinet12"
                        target="_blank"
                        class="icon-bottom-link"
                    >
                        <i class="fab fa-free-code-camp"></i>
                    </a>
                </b-tooltip>
            </div>
            <div class="bottom-footer">
                FREINET BRUTUS
                <span class="copywrite"> &copy; {{ currentYear }} </span>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            currentYear: '',
        };
    },

    created() {
        this.setCurrentYear();
    },

    methods: {
        setCurrentYear() {
            let date = new Date();
            this.currentYear = date.getFullYear();
        },
    },
};
</script>

<style scoped>
footer {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
    color: #8c8c8c;
    font-size: 15px;
    background-color: #0d0d0d;
}

#footer-logo {
    max-height: 4rem;
    position: relative;
    bottom: 1px;
    bottom: 2rem;
    left: 48%;
    display: none;
}

.icons {
    position: relative;
    bottom: 1.5rem;
}

a {
    color: #f2f2f2;
    font-size: 25px;
    padding-top: 2.5%;
    padding-left: 0.5%;
}
.icon-bottom-link {
    color: #fff;
    margin: 0 auto;
    padding: 1%;
}
.icon-bottom-link:hover {
    color: #238293;
}

.fab {
    font-size: 30px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-right: 8px;
    padding-left: 8px;
}

.bottom-footer {
    position: relative;
    bottom: 1rem;
}

.copywrite {
    color: #238293;
}

@media screen and (max-width: 1024px) {
}
</style>
