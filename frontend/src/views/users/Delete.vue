<template>
    <div class="card-groupomania">
        <h1><b-icon-trash-fill></b-icon-trash-fill> Supprimer le compte</h1>
        <p>Voulez-vous vraiment supprimer ce compte ? Cette action est irréversible...</p>
        <b-button variant="danger" @click="deleteUser()"><b-icon-trash-fill></b-icon-trash-fill> Supprimer</b-button>
    </div>
</template>

<script>
    export default {
        name: 'Delete',
        mounted: function() {
            if (this.$store.state.user.userId == -1) {
                this.$router.push('/');
                return;
            }
            this.$store.dispatch('getUserInfos');
        },
        methods: {
            deleteUser() {
                this.$store.dispatch('deleteUser');
            }
        }
    }
</script>

<style></style>