<template>
    <div class="user-post">
        <div class="user">
            <div class="user-info">
                <b-avatar></b-avatar>
                <h2>{{ post.User.name }}</h2>
            </div>
        </div>
        <div class="post">
            <a @click="singlePost()" class="post-link">
                <h3 class="post-title">{{ post.title }}</h3>
            </a>
            <p v-if="post.content" class="post-content">{{ post.content }}</p>
            <a v-if="post.imageUrl" @click="singlePost()">
                <img :src="post.imageUrl" :alt="post.title" class="post-image">
            </a>
        </div>
        <div class="comment">
            <b-button variant="primary" @click="singlePost()"><b-icon-chat-dots-fill></b-icon-chat-dots-fill> Commenter</b-button>
            <b-button variant="secondary"><b-icon-share-fill></b-icon-share-fill> Partager</b-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'UserPost',
        props: {
            post: Object
        },
        methods: {
            singlePost() {
                this.$router.push(`/post/${this.post.id}`)
            }
        },
    }
</script>

<style src="./UserPost.css"></style>