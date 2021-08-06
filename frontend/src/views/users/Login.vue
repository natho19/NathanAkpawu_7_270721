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
        
            <b-button type="submit" variant="primary"><b-icon-box-arrow-in-right></b-icon-box-arrow-in-right> Se connecter</b-button>
        </b-form>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                form: {
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

<style></style>