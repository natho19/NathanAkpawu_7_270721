<template>
    <div class="card-groupomania">
        <h1><b-icon-pencil-fill></b-icon-pencil-fill> Modifier le post</h1>

        <b-form @submit="onSubmit" class="form">
            <b-form-group>
                <b-form-input
                v-model="form.title"
                placeholder="Titre"
                required
                autofocus
                ></b-form-input>
            </b-form-group>

            <b-form-group>
                <b-form-textarea
                v-model="form.content"
                placeholder="Contenu"
                rows="4"
                max-rows="8"
                ></b-form-textarea>
            </b-form-group>

            <b-form-group>
                <div>Sélectionner une image : {{ form.file ? form.file.name : '' }}</div>
                <b-form-file v-model="form.file" class="mt-3" plain></b-form-file>
            </b-form-group>
        
            <b-button type="submit" variant="success"><b-icon-pencil-fill></b-icon-pencil-fill> Modifier</b-button>
        </b-form>
    </div>
</template>

<script>
    export default {
        name: 'Modify',
        data() {
            return {
                form: {
                    title: 'Lorem ipsum dolor sit',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officiis blanditiis libero minima, sint est. Facere ea ducimus vitae omnis, harum nisi id soluta fugit tempore et. Sunt, voluptatibus quidem?',
                    file: null
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