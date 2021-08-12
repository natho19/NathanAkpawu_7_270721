<template>
    <div class="users-posts">
        <user-post v-for="post in posts" :key="post.id" v-bind:post="post"></user-post>
    </div>
</template>

<script>
    import UserPost from '../../components/UserPost/UserPost.vue'
    import { mapState } from 'vuex'

    export default {
        name: 'Posts',
        components: {
            'user-post': UserPost,
        },
        mounted: function() {
            if (this.$store.state.user.userId == -1) {
                console.log(this.$store.state.user)
                this.$router.push('/');
                return;
            }
            this.$store.dispatch('getAllPosts');
            this.$store.dispatch('getUserInfos');
        },
        computed: {
            ...mapState({
                posts: 'posts'
            })
        },
    }
</script>

<style></style>