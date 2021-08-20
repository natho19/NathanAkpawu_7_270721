<template>
    <div class="card-groupomania">
        <h1><b-icon-person-lines-fill></b-icon-person-lines-fill> Liste des utilisateurs</h1>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Nathan Akpawu</td>
                    <td>
                        <b-button @click="modifyUser()" variant="success" class="btn-circle"><b-icon-pencil-fill></b-icon-pencil-fill></b-button>
                        <b-button @click="deleteUser()" variant="danger" class="btn-circle"><b-icon-trash-fill></b-icon-trash-fill></b-button>
                    </td>
                </tr>
                 <tr>
                    <th scope="row">2</th>
                    <td>Bienvenu</td>
                    <td>
                        <b-button @click="modifyUser()" variant="success" class="btn-circle"><b-icon-pencil-fill></b-icon-pencil-fill></b-button>
                        <b-button @click="deleteUser()" variant="danger" class="btn-circle"><b-icon-trash-fill></b-icon-trash-fill></b-button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'Users',

        methods: {
            modifyUser() {
                this.$router.push('/admin/modify-user/1');
            },

            deleteUser() {
                this.$router.push('/admin/delete-user/1');
            }
        }
    }
</script>

<style scoped>
    td button:first-child {
        margin-left: 0;
    }
</style>