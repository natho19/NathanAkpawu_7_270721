<template>
    <div class="card-groupomania">
        <h1><b-icon-plus-circle-fill></b-icon-plus-circle-fill> Publier un post</h1>

        <b-form @submit.prevent="onSubmit" class="form">
            <b-form-group>
                <b-form-input
                v-model="form.title"
                placeholder="Titre"
                required
                autofocus
                ></b-form-input>
            </b-form-group>

            <b-form-group>
                <b-form-textarea
                v-model="form.content"
                placeholder="Contenu"
                rows="4"
                max-rows="8"
                ></b-form-textarea>
            </b-form-group>

            <b-form-group>
                <div class="mb-3">{{ form.file ? 'Image sélectionnée' : 'Sélectionner une image' }} : <b-button v-if="form.file" class="btn-remove-file" @click="removeFile()" size="sm" variant="outline-danger">Enlever l'image</b-button></div>
                <b-form-file 
                v-model="form.file"
                plain
                ref="file-input"
                accept="image/*"
                @change="onFilePicked"
                ></b-form-file>
            </b-form-group>
        
            <b-button type="submit" variant="primary" :class="{ 'disabled' : !requiredFields }"><b-icon-plus-circle-fill></b-icon-plus-circle-fill> Publier</b-button>
        </b-form>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'Create',

        mounted: function() {
            this.$store.dispatch('getUserInfos');
        },

        data() {
            return {
                form: {
                    title: '',
                    content: '',
                    file: null 
                }
            }
        },

        computed: {
            ...mapState({
                userInfos: 'userInfos'
            }),

            requiredFields: function() {
                if (this.form.title != '') {
                    return true
                } else {
                    return false
                }
            }
        },

        methods: {
            onFilePicked(event) {
                this.form.file = event.target.files[0];
            },

            removeFile() {
                this.$refs['file-input'].reset();
            },

            onSubmit() {
                const formData = new FormData();
                formData.append('title', this.form.title);
                formData.append('content', this.form.content);
                formData.append('image', this.form.file);
                formData.append('userId', this.userInfos.id);
                
                const self = this;
                this.$store.dispatch('createPost', formData)
                    .then(function() {
                        self.$router.push('/');
                    }, function(error) {
                        console.log(error);
                    });
            }
        }
    }
</script>

<style>
    .btn-remove-file {
        margin: 5px;
    }
</style>