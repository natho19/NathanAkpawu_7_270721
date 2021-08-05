<template>
    <b-container>
        <b-row class="justify-content-center">
            <b-col cols="10" md="6">
                <single-post></single-post>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import SinglePost from '../../components/SinglePost/SinglePost.vue'

    export default {
        name: 'Single',
        components: {
            'single-post': SinglePost,
        }
    }
</script>

<style></style>