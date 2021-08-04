<template>
    <b-container>
        <b-row class="justify-content-center">
            <b-col cols="10" md="6">
                <user-post></user-post>
                <user-post></user-post>
                <user-post></user-post>
            </b-col>
        </b-row>
    </b-container>
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

<style>

</style>