<template>
    <div class="users-posts">
        <user-post></user-post>
        <user-post></user-post>
        <user-post></user-post>
    </div>
</template>

<script>
    import UserPost from '../../components/UserPost/UserPost.vue'

    export default {
        name: 'Posts',
        components: {
            'user-post': UserPost,
        },
        mounted: function() {
            if (this.$store.state.user.userId == -1) {
                this.$router.push('/');
                return;
            }
        }
    }
</script>

<style></style>