<template>
    <div class="card-groupomania">
        <h1><b-icon-box-arrow-in-right></b-icon-box-arrow-in-right> Se connecter</h1>

        <b-form @submit="onSubmit" class="form">
            <b-form-group>
                <b-form-input
                id="email"
                v-model="form.email"
                placeholder="Email"
                type="email"
                required
                autofocus
                ></b-form-input>
            </b-form-group>

            <b-form-group>
                <b-form-input
                v-model="form.password"
                placeholder="Mot de passe"
                type="password"
                required
                ></b-form-input>
            </b-form-group>

            <b-alert v-if="status == 'error_login'" variant="danger" show><b-icon-exclamation-triangle></b-icon-exclamation-triangle> Adresse email et/ou mot de passe invalide</b-alert>
        
            <b-button type="submit" variant="primary" :class="{ 'disabled' : !requiredFields }"><b-icon-box-arrow-in-right></b-icon-box-arrow-in-right>
                <span v-if="status == 'loading'"> Connexion en cours...</span>
                <span v-else> Se connecter</span>
            </b-button>
        </b-form>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'Login',
        mounted: function() {
            if (this.$store.state.user.userId != -1) {
                this.$router.push('/posts');
                return;
            }
        },
        data() {
            return {
                form: {
                    email: '',
                    password: ''
                }
            }
        },
        computed: {
            requiredFields: function() {
                if (this.form.email != '' && this.form.password != '' ) {
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
                this.$store.dispatch('login', {
                    email: this.form.email,
                    password: this.form.password
                }).then(function() {
                    self.$router.push('/posts')
                }, function(error) {
                    console.log(error);
                });
            }
        }
    }
</script>

<style></style>