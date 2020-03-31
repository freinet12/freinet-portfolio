<template>
    <nav class="navbar is-fixed-top" id="navBar">
        <div class="container">
            <div class="navbar-brand">
                <router-link class="navbar-item" to="/#home">
                    <img
                        src="@/assets/Logo_fb_White.png"
                        alt="Logo"
                        class="img-fluid"
                        id="nav-logo"
                        v-if="!navTransformed"
                    />
                    <img
                        src="@/assets/Logo_fb_black.png"
                        alt="Logo"
                        class="img-fluid"
                        id="nav-logo"
                        v-if="navTransformed"
                    />
                </router-link>

                <span class="navbar-burger burger" data-target="navbarMenuHero">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div>
            <div id="navbarMenuHero" class="navbar-menu">
                <div class="navbar-end">
                    <router-link class="navbar-item" to="/#home">
                        <!--<i class="fas fa-home nav-icon"></i>-->
                        HOME
                    </router-link>
                    <a class="navbar-item" href="/#portfolio">
                        <!--<i class="fas fa-th-large nav-icon"></i>-->
                        PORTFOLIO
                    </a>

                    <a class="navbar-item" href="/#about">
                        <!--<i class="fas fa-user nav-icon"></i>-->
                        ABOUT
                    </a>

                    <a class="navbar-item" href="/#contact">
                        <!--<i class="fas fa-envelope nav-icon"></i>-->
                        CONTACT
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',

    data() {
        return {
            navTransformed: false,
        };
    },

    mounted() {
        this.initMobileMenu();
        this.toggleNavColor();
    },

    methods: {
        initMobileMenu() {
            // Get all "navbar-burger" elements
            const navbarBurgers = Array.prototype.slice.call(
                document.querySelectorAll('.navbar-burger'),
                0,
            );
            // Check if there are any navbar burgers
            if (navbarBurgers.length > 0) {
                // Add a click event on each of them
                navbarBurgers.forEach(el => {
                    el.addEventListener('click', () => {
                        // Get the target from the "data-target" attribute
                        const target = el.dataset.target;
                        const $target = document.getElementById(target);

                        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                        el.classList.toggle('is-active');
                        $target.classList.toggle('is-active');
                    });
                });
            }
        },

        toggleNavColor() {
            let vm = this;
            window.onscroll = function() {
                let navbar = document.getElementById('navBar');
                if (
                    document.body.scrollTop > 20 ||
                    document.documentElement.scrollTop > 20
                ) {
                    navbar.classList.add('light-nav');
                    vm.navTransformed = true;
                } else {
                    navbar.classList.remove('light-nav');
                    vm.navTransformed = false;
                }
            };
        },
    },
};
</script>

<style scoped>
@media screen and (min-width: 1024px) {
    .nav-icon {
        padding-right: 5% !important;
    }
}
nav {
    position: fixed;
    font-family: 'Economica', sans-serif;
    font-size: 18px;
    background: rgba(0, 0, 0, 0);
}

#nav-logo {
    min-height: 5rem !important;
    max-height: 5rem !important;
}

.light-nav {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background-color: #fff;
}
.light-nav .logo,
.light-nav .navbar-item {
    color: #000 !important;
}
.light-nav .logo:hover {
    border-bottom: 5px solid #1a1a1a;
}

.navbar-item {
    color: #f2f2f2 !important;
}

.navbar-item:hover {
    color: #238293 !important;
    background-color: transparent !important;
}
.navbar-burger {
    margin-right: 3%;
    padding-right: 3%;
}
.navbar-burger span:nth-child(1) {
    height: 3px !important;
    width: 30px;
    border-radius: 25px;
    background-color: #238293 !important;
}

.navbar-burger span:nth-child(2) {
    height: 2.8px !important;
    width: 20px;
    margin-top: 1px;
    border-radius: 30px;
    background-color: #ff6224 !important;
}

.navbar-burger span:nth-child(3) {
    height: 3px !important;
    width: 30px;
    margin-top: 1px;
    border-radius: 25px;
    background-color: #ff6224 !important;
}

@media only screen and (max-width: 1000px) {
    .navbar-item {
        color: #000 !important;
    }
}
</style>
