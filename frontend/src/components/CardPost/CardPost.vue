<template>
    <b-col cols="10" md="6" class="card-post">
        <div class="user">
            <div class="user-info">
                <b-avatar :size="32"></b-avatar>
                <h2>Nathan Akpawu</h2>
            </div>
            <div class="user-actions">
                <b-button variant="success" class="btn-circle"><b-icon-pencil-fill></b-icon-pencil-fill></b-button>
                <b-button variant="danger" class="btn-circle"><b-icon-trash-fill></b-icon-trash-fill></b-button>
            </div>
        </div>
        <div class="post">
            <h3 class="post-title">Lorem ipsum dolor sit</h3>
            <p class="post-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officiis blanditiis libero minima, sint est. Facere ea ducimus vitae omnis, harum nisi id soluta fugit tempore et. Sunt, voluptatibus quidem?</p>
            <img src="../../assets/images/heart_eyes.gif" alt="Heart eyes" class="post-image">
        </div>
        <div class="comment">
            <b-button variant="primary"><b-icon-chat-dots-fill></b-icon-chat-dots-fill> Commenter</b-button>
            <b-button variant="secondary"><b-icon-share-fill></b-icon-share-fill> Partager</b-button>
        </div>
    </b-col>
</template>

<script>
    export default {
        name: 'CardPost'
    }
</script>

<style scoped src="./CardPost.css"></style>