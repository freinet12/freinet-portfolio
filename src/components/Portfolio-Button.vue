<template>
    <section>
        <a href="/#portfolio">
            <button class="portfolio-btn animated infinite pulse">
                {{ title }} <i class="fas fa-angle-double-down"></i>
            </button>
        </a>
    </section>
</template>

<script>
export default {
    name: 'PortfolioButton',
    props: ['title', 'link-to'],
};
</script>

<style scoped>
.portfolio-btn {
    background-color: rgb(0, 0, 0, 0);
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 3px;
    border: 2px solid #238293;
    width: 100%;
}
</style>
