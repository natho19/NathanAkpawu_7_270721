<template>
    <b-container>
        <b-row class="justify-content-center">
            <b-col cols="10" md="6">
                <single-post></single-post>
                <div class="card-groupomania">
                    <comment-form></comment-form>
                </div>
                <div class="card-groupomania">
                    <comment></comment>
                    <comment></comment>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import SinglePost from '../../components/SinglePost/SinglePost.vue'
    import CommentForm from '../../components/CommentForm/CommentForm.vue'
    import Comment from '../../components/Comment/Comment.vue'

    export default {
        name: 'Single',
        components: {
            'single-post': SinglePost,
            'comment-form': CommentForm,
            'comment': Comment
        }
    }
</script>

<style></style>