<template>
    <div id="app">
        <header-top></header-top>
        <div class="content">
            <router-view></router-view>
        </div>
        <footer-bottom></footer-bottom>
    </div>
</template>

<script>
    import Header from './components/Header/Header.vue'
    import Footer from './components/Footer/Footer.vue'

    export default {
        name: 'App',
        components: {
            'header-top': Header,
            'footer-bottom': Footer
        }
    }
</script>

<style>
    #app {
        height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .content {
        flex: 1 0 auto;
        background: #F9F9F9;
        padding: 40px 0;
    }
</style>
