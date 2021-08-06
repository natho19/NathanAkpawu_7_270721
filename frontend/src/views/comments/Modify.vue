<template>
    <div class="card-groupomania">
        <h1><b-icon-pencil-fill></b-icon-pencil-fill> Modifier le commentaire</h1>

        <b-form @submit="onSubmit" class="form">
            <b-form-group>
                <b-form-textarea
                v-model="form.comment"
                placeholder="Commentaire"
                rows="4"
                max-rows="6"
                required
                ></b-form-textarea>
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
                    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis illum distinctio similique consequuntur voluptatem magnam dicta ullam asperiores eaque accusantium?'
                }
            }
        }
    }
</script>

<style scoped>
</style>