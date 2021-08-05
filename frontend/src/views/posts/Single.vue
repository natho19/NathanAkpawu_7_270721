<template>
    <b-container>
        <b-row class="justify-content-center">
            <b-col cols="10" md="6">
                <single-post></single-post>
                <comment-form></comment-form>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import SinglePost from '../../components/SinglePost/SinglePost.vue'
    import CommentForm from '../../components/CommentForm/CommentForm.vue'

    export default {
        name: 'Single',
        components: {
            'single-post': SinglePost,
            'comment-form': CommentForm
        }
    }
</script>

<style></style>