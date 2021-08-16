<template>
    <div class="card-groupomania">
        <h1><b-icon-pencil-fill></b-icon-pencil-fill> Modifier le post</h1>

        <b-form @submit.prevent="onSubmit" class="form">
            <b-form-group>
                <b-form-input
                v-model="title"
                placeholder="Titre"
                required
                autofocus
                ></b-form-input>
            </b-form-group>

            <b-form-group>
                <b-form-textarea
                v-model="content"
                placeholder="Contenu"
                rows="4"
                max-rows="8"
                ></b-form-textarea>
            </b-form-group>

            <div class="current-post-image" v-if="image">
                <img :src="image" :alt="title" class="post-image">
            </div>

            <b-form-group>
                <div class="mb-3">{{ file ? 'Image sélectionnée' : 'Remplacer l\'image par' }} : {{ file ? file.name : '' }}</div>
                <b-form-file 
                v-model="file"
                plain
                accept="image/*"
                @change="onFilePicked"
                ></b-form-file>
            </b-form-group>
        
            <b-button type="submit" variant="success" :class="{ 'disabled' : !requiredFields }"><b-icon-pencil-fill></b-icon-pencil-fill> Modifier</b-button>
        </b-form>
    </div>
</template>

<script>
    export default {
        name: 'Modify',
        mounted: function() {
            if (this.$store.state.user.userId == -1) {
                this.$router.push('/');
                return;
            }
            this.$store.dispatch('getOnePost', this.$route.params.id);
            console.log(this.$store.state.post);
        },
        computed: {
            requiredFields: function() {
                if (this.title != '') {
                    return true
                } else {
                    return false
                }
            },
            title: {
                get() {
                    return this.$store.state.post.title;
                },
                set(newTitle) {
                    this.$store.commit('SET_POST_TITLE', newTitle)
                }
            },
            content: {
                get() {
                    return this.$store.state.post.content;
                },
                set(newContent) {
                    this.$store.commit('SET_POST_CONTENT', newContent)
                }
            },
            image: {
                get() {
                    return this.$store.state.post.imageUrl;
                }
            }

        },
        data() {
            return {
                file: null
            }
        },
        methods: {
            onFilePicked(event) {
                this.file = event.target.files[0];
            },
            onSubmit() {
                console.log(this.file);
            }
        }
    }
</script>

<style>
    .current-post-image {
        margin-bottom: 25px !important;
    }
</style>