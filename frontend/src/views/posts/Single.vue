<template>
    <div class="single" v-if="post">
        <!-- Single Post -->
        <div class="single-post">
            <div class="user" v-if="post.User">
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
        <!-- Comment Form -->
        <div class="card-groupomania">
            <b-form class="form" @submit.prevent="onSubmit">
                <b-form-group>
                    <b-form-textarea
                    v-model="form.comment"
                    placeholder="Commentaire"
                    rows="4"
                    max-rows="6"
                    required
                    ></b-form-textarea>
                </b-form-group>
                <b-button type="submit" variant="primary"><b-icon-chat-dots-fill></b-icon-chat-dots-fill> Envoyer</b-button>
            </b-form>
        </div>
        <!-- Comments -->
        <div class="card-groupomania">
            <!-- Comment -->
            <div class="card-groupomania bg-gray">
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
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'Single',
        mounted: function() {
            if (this.$store.state.user.userId == -1) {
                this.$router.push('/');
                return;
            }
            this.$store.dispatch('getOnePost', this.$route.params.id);
        },
        computed: {
            ...mapState({
                post: 'post'
            })
        },
        data() {
            return {
                form: {
                    comment: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log(this.form)
            },
            modifyComment() {
                this.$router.push('/post/1/modify-comment/1')
            },
            deleteComment() {
                this.$router.push('/post/1/delete-comment/1')
            }
        }
    }
</script>

<style scoped>
    .single-post {
        background: #FFF;
        border: 1px solid #CED4DA;
        padding: 25px !important;
        margin-bottom: 25px;
    }

    .single-post .post {
        margin-bottom: 0;
    }

    .card-groupomania {
        margin-bottom: 15px;
        padding: 20px !important;
    }

    .card-groupomania:last-child {
        margin-bottom: 0;
    }

    .bg-gray {
        background: #F2F2F2;
    }

    .user {
        margin-bottom: 10px;
    }

    .comment p {
        font-size: 14.5px;
        font-weight: 300;
    }
</style>