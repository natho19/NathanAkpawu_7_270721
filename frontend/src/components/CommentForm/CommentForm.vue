<template>     
    <b-form class="form" @submit="onSubmit">
        <b-form-group>
            <b-form-textarea
            v-model="form.comment"
            placeholder="Commentaire"
            rows="4"
            max-rows="6"
            required
            ></b-form-textarea>
        </b-form-group>
        <b-button type="submit" variant="primary"><b-icon-chat-dots-fill></b-icon-chat-dots-fill> Envoyer</b-button>
    </b-form>
</template>

<script>
    export default {
        name: 'CommentForm',
        data() {
            return {
                form: {
                    comment: ''
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

<style scoped src="./CommentForm.css"></style>