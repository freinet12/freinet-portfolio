<template>
    <div class="grid-container">
        <div class="grid-item grid-item-nav" style="background-color: #000">
            <Navbar />
        </div>
        <div class="grid-item grid-item-main">
            <router-view></router-view>
        </div>
        <div class="grid-item grid-item-footer">
            <Footer />
        </div>
    </div>
</template>

<script>
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default {
    name: 'app',
    components: {
        Footer,
        Navbar,
    },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Economica|Pacifico');

body {
    overflow: hidden;
}
.grid-container {
    min-height: 100vh;
    overflow-x: hidden;
    overflow-y: hidden;
    display: grid;
    grid-template-areas:
        'nav nav nav nav nav nav'
        'main main main main main main'
        'footer footer footer footer footer footer';
    background-color: #e6e6e6;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto 1fr auto;
}

.grid-item-nav {
    grid-area: nav;
    align-items: center;
    justify-content: space-between;
    background-color: #f9fafc;
}

.grid-item-main {
    grid-area: main;
}

.grid-item-footer {
    grid-area: footer;
}
</style>
