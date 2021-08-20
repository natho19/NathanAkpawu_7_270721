<template>
    <div class="card-groupomania">
        <h1><b-icon-trash-fill></b-icon-trash-fill> Supprimer l'utilisateur</h1>
        <p>Voulez-vous vraiment supprimer cet utilisateur ? Cette action est irréversible...</p>
        <b-button variant="danger" @click="deleteUser()"><b-icon-trash-fill></b-icon-trash-fill> Supprimer</b-button>
    </div>
</template>

<script>
    export default {
        name: 'Delete',
        methods: {
            deleteUser() {
                console.log('Supprimer cet utilisateur');
            }
        }
    }
</script>

<style></style>