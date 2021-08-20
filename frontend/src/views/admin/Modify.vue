<template>
    <div class="card-groupomania">
        <h1><b-icon-pencil-fill></b-icon-pencil-fill> Modifier le rôle</h1>

        <b-form @submit.prevent="onSubmit" class="form">
            <div class="form-group">
                <div class="form-check form-check-inline">
                    <input v-model="selected" class="form-check-input" type="radio" name="role" id="admin" :value="1" checked>
                    <label class="form-check-label" for="admin">Administrateur</label>
                </div>
                <div class="form-check form-check-inline">
                    <input v-model="selected" class="form-check-input" type="radio" name="role" id="user" :value="0">
                    <label class="form-check-label" for="user">Utilisateur</label>
                </div>
            </div>
            <div class="mb-3">Selected: <strong>{{ selected }}</strong></div>
            <b-button type="submit" variant="success"><b-icon-pencil-fill></b-icon-pencil-fill> Modifier</b-button>
        </b-form>
    </div>
</template>

<script>
    export default {
        name: 'Modify',
        
        mounted: function() {
            this.$store.dispatch('getUserInfos');
        },

        data() {
            return {
                selected: ''
            }
        }
    }
</script>

<style scoped>
    .form-control {
        appearance: auto !important;
    }
</style>