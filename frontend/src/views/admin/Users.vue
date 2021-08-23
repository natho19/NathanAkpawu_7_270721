<template>
    <div class="card-groupomania">
        <h1><b-icon-person-lines-fill></b-icon-person-lines-fill> Utilisateurs</h1>
        <table class="table table-striped table-responsive">
            <thead>
                <tr>
                    <th scope="col">Nom</th>
                    <th scope="col">Rôle</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="user.id">
                    <th scope="row">{{ user.name }}</th>
                    <td>{{ getUserRole(index) }}</td>
                    <td>
                        <router-link v-if="user.id" :to="{ name: 'adminModifyUser', params: { id: user.id } }">
                            <b-button @click="modifyUser()" variant="success" class="btn-circle"><b-icon-pencil-fill></b-icon-pencil-fill></b-button>
                        </router-link>
                        <router-link v-if="user.id" :to="{ name: 'adminDeleteUser', params: { id: user.id } }">
                            <b-button @click="deleteUser()" variant="danger" class="btn-circle"><b-icon-trash-fill></b-icon-trash-fill></b-button>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import { mapGetters } from 'vuex'

    export default {
        name: 'Users',

        mounted: function() {
            if (!this.$store.state.userInfos.isAdmin) {
                this.$router.push('/');
                return;
            }
            this.$store.dispatch('getAllUsersByAdmin');
        },

        computed: {
            ...mapState({
                users: 'users'
            }),

            ...mapGetters({
                getUserRole: 'getUserRole'
            })
        },

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
    td a:first-child button {
        margin-left: 0;
    }
</style>