<template>
    <div class="single-post">
        <div class="user">
            <div class="user-info">
                <b-avatar></b-avatar>
                <h2>Nathan Akpawu</h2>
            </div>
            <div class="user-actions">
                <b-button @click="modifyPost()" variant="success" class="btn-circle"><b-icon-pencil-fill></b-icon-pencil-fill></b-button>
                <b-button variant="danger" class="btn-circle"><b-icon-trash-fill></b-icon-trash-fill></b-button>
            </div>
        </div>
        <div class="post">
            <h3 class="post-title">Lorem ipsum dolor sit</h3>
            <p class="post-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officiis blanditiis libero minima, sint est. Facere ea ducimus vitae omnis, harum nisi id soluta fugit tempore et. Sunt, voluptatibus quidem?</p>
            <img src="../../assets/images/heart_eyes.gif" alt="Heart eyes" class="post-image">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SinglePost',
        methods: {
            modifyPost() {
                this.$router.push('/modify-post/1')
            }
        }
    }
</script>

<style scoped src="./SinglePost.css"></style>