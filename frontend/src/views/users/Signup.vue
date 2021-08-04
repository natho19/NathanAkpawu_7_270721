<template>
    <b-container>
        <b-row class="justify-content-center">
            <b-col cols="10" md="6" class="card-form">
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

                    <b-form-group label="Prénom" label-for="firstname">
                        <b-form-input
                        v-model="form.firstname"
                        placeholder="Entrer votre prénom"
                        required
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
                
                    <b-button type="submit" variant="primary"><b-icon-person-plus-fill></b-icon-person-plus-fill> S'inscrire</b-button>
                </b-form>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: 'Signup',
        data() {
            return {
                form: {
                    name: '',
                    firstname: '',
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            onSubmit(event) {
                event.preventDefault()
                console.log(JSON.stringify(this.form))
            }
        }
    }
</script>

<style>

</style>