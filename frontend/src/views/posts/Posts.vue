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
        }
    }
</script>

<style></style>