<template>
    <section>
        <div class="hero-section">
            <Hero />
        </div>
        <div class="portfolio-section">
            <Portfolio />
        </div>
    </section>
</template>

<script>
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';

export default {
    components: {
        Hero,
        Portfolio,
    },
};
</script>

<style scoped></style>
