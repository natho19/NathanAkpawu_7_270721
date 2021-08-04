<template>
    <div class="user-post">
        <div class="user">
            <div class="user-info">
                <b-avatar></b-avatar>
                <h2>Nathan Akpawu</h2>
            </div>
            <div class="user-actions">
                <b-button variant="success" class="btn-circle"><b-icon-pencil-fill></b-icon-pencil-fill></b-button>
                <b-button variant="danger" class="btn-circle"><b-icon-trash-fill></b-icon-trash-fill></b-button>
            </div>
        </div>
        <div class="post">
            <a href="#" class="post-link">
                <h3 class="post-title">Lorem ipsum dolor sit</h3>
            </a>
            <p class="post-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officiis blanditiis libero minima, sint est. Facere ea ducimus vitae omnis, harum nisi id soluta fugit tempore et. Sunt, voluptatibus quidem?</p>
            <a href="#">
                <img src="../../assets/images/heart_eyes.gif" alt="Heart eyes" class="post-image">
            </a>
        </div>
        <div class="comment">
            <b-button variant="primary"><b-icon-chat-dots-fill></b-icon-chat-dots-fill> Commenter</b-button>
            <b-button variant="secondary"><b-icon-share-fill></b-icon-share-fill> Partager</b-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'UserPost'
    }
</script>

<style scoped src="./UserPost.css"></style>