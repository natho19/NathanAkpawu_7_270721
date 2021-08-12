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
                <div>{{ form.file ? 'Image sélectionnée' : 'Sélectionner une image' }} : {{ form.file ? form.file.name : '' }}</div>
                <b-form-file 
                v-model="form.file" 
                class="mt-3" 
                plain
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
            if (this.$store.state.user.userId == -1) {
                console.log(this.$store.state.user)
                this.$router.push('/');
                return;
            }
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
            requiredFields: function() {
                if (this.form.title != '') {
                    return true
                } else {
                    return false
                }
            },
            ...mapState(['userInfos'])
        },
        methods: {
            onFilePicked(event) {
                this.form.file = event.target.files[0];
                // const files = event.target.files;
                // const fileReader = new FileReader();

                // fileReader.addEventListener('load', () => {
                //     this.imageUrl = fileReader.result;
                // });

                // fileReader.readAsDataURL(files[0]);
                // this.form.image = URL.createObjectURL(files[0]);
                // console.log(this.form.image)
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
                console.log(...formData);
            }
        }
    }
</script>

<style></style>