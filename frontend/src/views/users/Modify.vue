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
            if (this.$store.state.user.userId == -1) {
                this.$router.push('/');
                return;
            }
            this.$store.dispatch('getUserInfos');
        },
        computed: {
            requiredFields: function() {
                if (this.name != '') {
                    return true
                } else {
                    return false
                }
            },
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
            }
        },
        methods: {
            onSubmit() {
                this.$store.dispatch('editUserName', { 
                    name: this.name 
                }).then(function() {
                    window.location.reload()
                }, function(error) {
                    console.log(error);
                });
            }
        }
    }
</script>

<style></style>