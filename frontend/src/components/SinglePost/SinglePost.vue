<template>
    <div class="single-post">
        <div class="user">
            <div class="user-info">
                <b-avatar></b-avatar>
                <h2>{{ post.User.name }}</h2>
            </div>
            <div class="user-actions">
                <b-button @click="modifyPost()" variant="success" class="btn-circle"><b-icon-pencil-fill></b-icon-pencil-fill></b-button>
                <b-button @click="deletePost()" variant="danger" class="btn-circle"><b-icon-trash-fill></b-icon-trash-fill></b-button>
            </div>
        </div>
        <div class="post">
            <h3 class="post-title">{{ post.title }}</h3>
            <p v-if="post.content" class="post-content">{{ post.content }}</p>
            <a v-if="post.imageUrl" @click="singlePost()">
                <img :src="post.imageUrl" :alt="post.title" class="post-image">
            </a>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'SinglePost',
        methods: {
            modifyPost() {
                this.$router.push('/modify-post/1')
            },
            deletePost() {
                this.$router.push('/delete-post/1')
            }
        },
        computed: {
            ...mapState({
                post: 'posts'
            })
        }
    }
</script>

<style scoped src="./SinglePost.css"></style>