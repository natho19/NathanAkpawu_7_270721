<template>
    <div class="card-groupomania">
        <h1><b-icon-pencil-fill></b-icon-pencil-fill> Modifier le commentaire</h1>

        <b-form @submit.prevent="onSubmit" class="form">
            <b-form-group>
                <b-form-textarea
                v-model="content"
                placeholder="Commentaire"
                rows="4"
                max-rows="6"
                required
                ></b-form-textarea>
            </b-form-group>
        
            <b-button type="submit" variant="success" :class="{ 'disabled' : !requiredFields }"><b-icon-pencil-fill></b-icon-pencil-fill> Modifier</b-button>
        </b-form>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'Modify',

        mounted: function() {
            this.$store.dispatch('getOneComment', {
                postId: this.$route.params.postId,
                id: this.$route.params.id
            });
            
            this.$store.dispatch('getUserInfos');
        },

        computed: {
            ...mapState({
                comment: 'comment',
                userInfos: 'userInfos'
            }),

            content: {
                get() {
                    return this.$store.state.comment.content;
                },
                set(newContent) {
                    this.$store.commit('SET_COMMENT', newContent)
                }
            },

            requiredFields: function() {
                if (this.content != '') {
                    return true
                } else {
                    return false
                }
            }
        },

        methods: {
            onSubmit() {
                const self = this;
                this.$store.dispatch('editComment', {
                    content: this.content,
                    userId: this.userInfos.id
                })
                .then(function() {
                    self.$router.push(`/post/${self.comment.postId}`);
                }, function(error) {
                    console.log(error);
                });
            }
        } 
    }
</script>

<style></style>