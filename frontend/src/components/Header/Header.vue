<template>
    <header>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-container>
                <b-navbar variant="faded" type="light">
                    <b-navbar-brand href="#">
                        <img src="../../assets/logo.svg" class="d-inline-block align-top logo" alt="Groupomania">
                    </b-navbar-brand>
                </b-navbar>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">

                        <b-nav-item href="#">S'inscrire</b-nav-item>
                        <b-nav-item href="#">Se connecter</b-nav-item>

                        <!-- <b-nav-item-dropdown text="Lang" right>
                            <b-dropdown-item href="#">EN</b-dropdown-item>
                            <b-dropdown-item href="#">ES</b-dropdown-item>
                            <b-dropdown-item href="#">RU</b-dropdown-item>
                            <b-dropdown-item href="#">FA</b-dropdown-item>
                        </b-nav-item-dropdown> -->
                    </b-navbar-nav>
                </b-collapse>
            </b-container>
        </b-navbar>
    </header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style scoped src="./Header.css"></style>