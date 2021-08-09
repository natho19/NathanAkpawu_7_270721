<template>
    <div class="card-groupomania">
        <h1><b-icon-person-plus-fill></b-icon-person-plus-fill> S'inscrire en quelques secondes...</h1>

        <b-form @submit="onSubmit" class="form">
            <b-form-group label="Nom" label-for="name">
                <b-form-input
                id="name"
                v-model="form.name"
                placeholder="Entrer votre nom"
                required
                autofocus
                ></b-form-input>
            </b-form-group>
        
            <b-form-group label="Email" label-for="email">
                <b-form-input
                id="email"
                v-model="form.email"
                placeholder="Entrer votre email"
                type="email"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group label="Mot de passe" label-for="password">
                <b-form-input
                v-model="form.password"
                placeholder="Entrer votre mot de passe"
                type="password"
                required
                ></b-form-input>
            </b-form-group>

            <b-alert v-if="status == 'error_create'" variant="danger" show><b-icon-exclamation-triangle></b-icon-exclamation-triangle> Adresse email déjà utilisée</b-alert>

            <b-button type="submit" variant="primary" :class="{ 'disabled' : !requiredFields }"><b-icon-person-plus-fill></b-icon-person-plus-fill>
                <span v-if="status == 'loading'"> Inscription en cours...</span>
                <span v-else> S'inscrire</span>
            </b-button>
        </b-form>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'Signup',
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    password: ''
                }
            }
        },
        computed: {
            requiredFields: function() {
                if (this.form.name != '' && this.form.email != '' && this.form.password != '' ) {
                    return true
                } else {
                    return false
                }
            },
            ...mapState(['status'])
        },
        methods: {
            onSubmit(event) {
                event.preventDefault();
                const self = this;
                this.$store.dispatch('createAccount', {
                    name: this.form.name,
                    email: this.form.email,
                    password: this.form.password
                }).then(function() {
                    self.$router.push('/');
                }, function(error) {
                    console.log(error);
                })
            }
        }
    }
</script>

<style></style>