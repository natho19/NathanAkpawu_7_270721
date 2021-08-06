<template>
    <div class="card-groupomania">
        <h1><b-icon-plus-circle-fill></b-icon-plus-circle-fill> Publier un post</h1>

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
        
            <b-button type="submit" variant="primary"><b-icon-plus-circle-fill></b-icon-plus-circle-fill> Publier</b-button>
        </b-form>
    </div>
</template>

<script>
    export default {
        name: 'Create',
        data() {
            return {
                form: {
                    title: '',
                    content: '',
                    file: null 
                }
            }
        },
        methods: {
            onSubmit(event) {
                event.preventDefault()
                console.log(this.form)
            }
        }
    }
</script>

<style></style>