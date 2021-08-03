<template>
    <b-container>
        <b-row class="justify-content-center">
            <b-col cols="10" md="6" class="form-card">
                <h1><b-icon-trash-fill></b-icon-trash-fill> Supprimer mon compte</h1>
                <p>Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.</p>
                <b-button variant="danger"><b-icon-trash-fill></b-icon-trash-fill> Supprimer</b-button>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: 'Delete'
    }
</script>

<style scoped>
</style>