<template>
    <div class="card-groupomania">
        <div class="user">
            <div class="user-info">
                <b-avatar></b-avatar>
                <h2>Nathan Akpawu</h2>
            </div>
            <div class="user-actions">
                <b-button @click="modifyComment()" variant="success" class="btn-circle"><b-icon-pencil-fill></b-icon-pencil-fill></b-button>
                <b-button @click="deleteComment()" variant="danger" class="btn-circle"><b-icon-trash-fill></b-icon-trash-fill></b-button>
            </div>
        </div>
        <div class="comment">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis illum distinctio similique consequuntur voluptatem magnam dicta ullam asperiores eaque accusantium?</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Comment',
        methods: {
            modifyComment() {
                this.$router.push('/post/1/modify-comment/1')
            },
            deleteComment() {
                this.$router.push('/post/1/delete-comment/1')
            }
        }
    }
</script>

<style scoped src="./Comment.css"></style>