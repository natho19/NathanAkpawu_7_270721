<template>
    <div id="app">
        <header-top></header-top>
        <div class="content">
            <b-container>
                <b-row class="justify-content-center">
                    <b-col cols="11" md="9" lg="7">
                        <router-view></router-view>
                    </b-col>
                </b-row>
            </b-container>
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
        },

        mounted: function() {
            if (this.$store.state.user.userId == -1) {
                this.$router.push('/');
                return;
            }

            this.$store.dispatch('getUserInfos');
        }
    }
</script>

<style>
    @font-face {
        font-family: 'Gerbera';
        src: url('assets/fonts/Gerbera.eot');
        src: local('Gerbera'), local('Gerbera'),
            url('assets/fonts/Gerbera.eot?#iefix') format('embedded-opentype'),
            url('assets/fonts/Gerbera.woff2') format('woff2'),
            url('assets/fonts/Gerbera.woff') format('woff'),
            url('assets/fonts/Gerbera.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Gerbera';
        src: url('assets/fonts/Gerbera-Light.eot');
        src: local('Gerbera Light'), local('Gerbera-Light'),
            url('assets/fonts/Gerbera-Light.eot?#iefix') format('embedded-opentype'),
            url('assets/fonts/Gerbera-Light.woff2') format('woff2'),
            url('assets/fonts/Gerbera-Light.woff') format('woff'),
            url('assets/fonts/Gerbera-Light.ttf') format('truetype');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Gerbera';
        src: url('assets/fonts/Gerbera-Bold.eot');
        src: local('Gerbera Bold'), local('Gerbera-Bold'),
            url('assets/fonts/Gerbera-Bold.eot?#iefix') format('embedded-opentype'),
            url('assets/fonts/Gerbera-Bold.woff2') format('woff2'),
            url('assets/fonts/Gerbera-Bold.woff') format('woff'),
            url('assets/fonts/Gerbera-Bold.ttf') format('truetype');
        font-weight: bold;
        font-style: normal;
    }

    body {
        padding-top: 80px;
        font-family: 'Gerbera', sans-serif !important;
    }

    #app {
        height: calc(100vh - 80px);
        display: flex;
        flex-direction: column;
    }

    .content {
        flex: 1 0 auto;
        background: #F2F2F2;
        padding: 40px 0;
    }

    .form-group, .alert {
        margin-bottom: 25px !important;
    }

    .alert {
        font-weight: 900;
        font-size: 15px;
    }

    .card-groupomania {
        background: #FFF;
        border: 1px solid #CED4DA;
        padding: 25px !important;
        margin-bottom: 25px;
    }

    .card-groupomania h1 {
        font-size: 1.8rem;
        margin-bottom: 25px;
        color: #FD2D01;
    }

    .btn-orange {
        background: #FD2D01 !important;
        border-color: #FD2D01 !important;
        color: #FFF;
    }

    .btn-orange:hover, .btn-orange:active, .btn-orange:focus {
        background-color: #DF2601 !important;
        border-color: #DF2601 !important;
    }

    .btn-orange:focus {
        box-shadow: 0 0 0 0.25rem rgba(223, 38, 1, .5) !important;
    }

    .btn-remove-file {
        margin: 5px;
    }

    .current-post-image {
        margin-bottom: 25px !important;
    }
</style>
