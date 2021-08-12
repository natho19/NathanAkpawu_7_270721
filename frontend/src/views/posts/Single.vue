<template>
    <div class="single" v-if="post">
        <single-post></single-post>
        <div class="card-groupomania">
            <comment-form></comment-form>
        </div>
        <div class="card-groupomania">
            <comment></comment>
            <comment></comment>
        </div>
    </div>
</template>

<script>
    import SinglePost from '../../components/SinglePost/SinglePost.vue'
    import CommentForm from '../../components/CommentForm/CommentForm.vue'
    import Comment from '../../components/Comment/Comment.vue'
    import { mapState } from 'vuex'

    export default {
        name: 'Single',
        components: {
            'single-post': SinglePost,
            'comment-form': CommentForm,
            'comment': Comment
        },
        mounted: function() {
            if (this.$store.state.user.userId == -1) {
                console.log(this.$store.state.user)
                this.$router.push('/');
                return;
            }
            this.$store.dispatch('getOnePost', this.$route.params.id);
        },
        computed: {
            ...mapState({
                post: 'posts'
            })
        }
    }
</script>

<style></style>