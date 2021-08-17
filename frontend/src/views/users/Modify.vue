<template>
    <div class="card-groupomania">
        <h1><b-icon-pencil-fill></b-icon-pencil-fill> Modifier le compte</h1>

        <b-form @submit.prevent="onSubmit" class="form">
            <b-form-group label="Nom" label-for="name">
                <b-form-input
                id="name"
                v-model="name"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group label="Email" label-for="email">
                <b-form-input
                id="email"
                :value="email"
                type="email"
                required
                disabled
                ></b-form-input>
            </b-form-group>
        
            <b-button type="submit" variant="success" :class="{ 'disabled' : !requiredFields }"><b-icon-pencil-fill></b-icon-pencil-fill> Modifier</b-button>
        </b-form>
    </div>
</template>

<script>
    export default {
        mounted: function() {
            this.$store.dispatch('getUserInfos');
        },

        computed: {
            name: {
                get() {
                    return this.$store.state.userInfos.name;
                },
                set(newName) {
                    this.$store.commit('SET_USER_NAME', newName)
                }
            },

            email: {
                get() {
                    return this.$store.state.userInfos.email;
                }
            },
            
            requiredFields: function() {
                if (this.name != '') {
                    return true
                } else {
                    return false
                }
            }
        },

        methods: {
            onSubmit() {
                this.$store.dispatch('editUserName', { 
                    name: this.name 
                }).then(function() {
                    console.log('Utilisateur modifié avec succès !')
                }, function(error) {
                    console.log(error);
                });
            }
        }
    }
</script>

<style></style>