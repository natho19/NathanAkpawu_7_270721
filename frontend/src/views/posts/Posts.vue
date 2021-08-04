<template>
    <b-container>
        <b-row class="justify-content-center">
            <card-post></card-post>
        </b-row>
    </b-container>
</template>

<script>
    import CardPost from '../../components/CardPost/CardPost.vue'

    export default {
        name: 'Posts',
        components: {
            'card-post': CardPost,
        }
    }
</script>

<style>

</style>