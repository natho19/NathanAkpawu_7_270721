<template>
    <b-container>
        <b-row class="justify-content-center">
            <b-col cols="10" md="6" class="form-card">
                <h1><b-icon-pencil-fill></b-icon-pencil-fill> Modifier mon compte</h1>

                <b-form @submit="onSubmit" class="form">
                    <b-form-group label="Nom" label-for="name">
                        <b-form-input
                        id="name"
                        v-model="form.name"
                        required
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
                        disabled
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group label="Mot de passe" label-for="password">
                        <b-form-input
                        v-model="form.password"
                        placeholder="Entrer votre mot de passe"
                        type="password"
                        required
                        disabled
                        ></b-form-input>
                    </b-form-group>
                
                    <b-button type="submit" variant="primary"><b-icon-pencil-fill></b-icon-pencil-fill> Modifier</b-button>
                </b-form>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: 'Modify',
        data() {
            return {
                form: {
                    name: 'Akpawu',
                    firstname: 'Nathan',
                    email: 'nakpawu@gmail.com',
                    password: '****'
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

<style scoped>
</style>