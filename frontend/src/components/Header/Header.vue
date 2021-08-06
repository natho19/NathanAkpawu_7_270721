<template>
    <header>
        <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
            <b-container>
                <b-navbar variant="faded" type="light">
                    <b-navbar-brand @click="viewPosts()" href="#">
                        <img src="../../assets/images/logo.svg" class="d-inline-block align-top logo" alt="Groupomania">
                    </b-navbar-brand>
                </b-navbar>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                        <li class="nav-item">
                            <router-link to="/signup" class="nav-link">S'inscrire</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/" class="nav-link" exact>Se connecter</router-link>
                        </li>
                        <b-button @click="createPost()" pill variant="danger" class="btn-orange"><b-icon-plus-circle-fill></b-icon-plus-circle-fill> Publier</b-button>
                        <li class="nav-item">
                            <router-link to="/posts" class="nav-link" exact>Tous les posts</router-link>
                        </li>
                        <b-nav-item-dropdown right>
                            <template #button-content><b-icon-person-fill></b-icon-person-fill> Nathan Akpawu</template>
                            <li>
                                <router-link to="/modify-user" class="dropdown-item">
                                    <b-icon-pencil-fill></b-icon-pencil-fill> Modifier
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/delete-user" class="dropdown-item">
                                    <b-icon-trash-fill></b-icon-trash-fill> Supprimer
                                </router-link>
                            </li>
                            <div class="dropdown-divider"></div>
                            <b-dropdown-item href="#" @click="logout()">
                                <b-icon-box-arrow-in-left></b-icon-box-arrow-in-left> Se déconnecter
                            </b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-container>
        </b-navbar>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        methods: {
            viewPosts: function() {
                this.$router.push('/posts')
            },
            logout: function() {
                this.$router.push('/');
            },
            createPost: function() {
                this.$router.push('/create-post');
            }
        }
    }
</script>

<style scoped src="./Header.css"></style>