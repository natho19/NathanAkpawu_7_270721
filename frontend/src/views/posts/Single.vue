<template>
    <div class="single" v-if="post">
        <!-- Single Post -->
        <div class="single-post">
            <div class="user">
                <div class="user-info" v-if="post.User">
                    <b-avatar></b-avatar>
                    <h2>{{ post.User.name }}</h2>
                </div>
                <div class="user-actions">
                    <router-link 
                        v-if="post.id" 
                        :to="{ name: 'modifyPost',
                        params: { id: post.id }}"
                    >
                        <b-button variant="success" class="btn-circle"><b-icon-pencil-fill></b-icon-pencil-fill></b-button>
                    </router-link>
                    <router-link 
                        v-if="post.id" 
                        :to="{ name: 'deletePost',
                        params: { id: post.id }}"
                    >
                        <b-button variant="danger" class="btn-circle"><b-icon-trash-fill></b-icon-trash-fill></b-button>
                    </router-link>
                </div>
            </div>
            <div class="post">
                <h3 class="post-title">{{ post.title }}</h3>
                <p v-if="post.content" class="post-content">{{ post.content }}</p>
                <img v-if="post.imageUrl" :src="post.imageUrl" :alt="post.title" class="post-image">
            </div>
        </div>
        <!-- Comment Form -->
        <div class="card-groupomania">
            <b-form class="form" @submit.prevent="onSubmit">
                <b-form-group>
                    <b-form-textarea
                    v-model="comment"
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
        <div class="card-groupomania" v-if="comments.length !== 0">
            <!-- Comment -->
            <div class="comment-card" v-for="comment in comments" :key="comment.id">
                <div class="user">
                    <div class="user-info" v-if="comment.User">
                        <b-avatar></b-avatar>
                        <h2>{{ comment.User.name }}</h2>
                    </div>
                    <div class="user-actions">
                        <router-link 
                        v-if="comment.postId && comment.id" 
                        :to="{ name: 'modifyComment',
                        params: { postId: comment.postId, id: comment.id }}"
                        >
                            <b-button variant="success" class="btn-circle"><b-icon-pencil-fill></b-icon-pencil-fill></b-button>
                        </router-link>

                        <router-link 
                        v-if="comment.postId && comment.id" 
                        :to="{ name: 'deleteComment',
                        params: { postId: comment.postId, id: comment.id }}"
                        >
                            <b-button variant="danger" class="btn-circle"><b-icon-trash-fill></b-icon-trash-fill></b-button>
                        </router-link>
                    </div>
                </div>
                <div class="comment">
                    <p>{{ comment.content }}</p>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="card-groupomania">
            <h1><b-icon-exclamation-triangle></b-icon-exclamation-triangle> Aucun post trouvé</h1>
            <p>Il semble que le post que vous voulez afficher n'existe pas. Pas de panique !!! Retrouvez la liste des posts en retournant sur la page d'accueil.</p>
            <router-link :to="{ name: 'allPosts' }">
                <b-button variant="primary"><b-icon-house-door-fill></b-icon-house-door-fill>  Accueil</b-button>
            </router-link>
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
            this.$store.dispatch('getAllComments', this.$route.params.id);
        },
        computed: {
            ...mapState({
                post: 'post',
                comments: 'comments'
            })
        },
        data() {
            return {
                comment: ''
            }
        },
        methods: {
            onSubmit() {
                console.log(this.comment);
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

    .comment-card {
        background: #FFF;
        border: 1px solid #CED4DA;
        background: #F2F2F2;
        padding: 15px;
        margin-bottom: 15px;
    }

    .comment-card:last-child {
        margin-bottom: 0;
    }

    .comment-card .user {
        margin-bottom: 10px;
    }

    .user {
        margin-bottom: 20px;
    }

    .comment p {
        font-size: 14.5px;
        font-weight: 300;
        margin-bottom: 5px;
    }
</style>