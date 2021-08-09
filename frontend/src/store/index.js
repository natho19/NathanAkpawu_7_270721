import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios')

const instance = axios.create({
    baseURL: 'http://localhost:3000/api/'
})

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        status: '',
        user: {
            userId: -1,
            token: ''
        },
        error: ''
    },

    mutations: {
        SET_STATUS: function(state, status) {
            state.status = status;
        },

        LOG_USER: function(state, user) {
            state.user = user;
        }
    },

    actions: {
        createAccount({ commit }, userInfos) {
            commit('SET_STATUS', 'loading');
            return new Promise((resolve, reject) => {
                instance.post('auth/signup', userInfos)
                    .then(function(response) {
                        commit('SET_STATUS', 'created');
                        resolve(response);
                    })
                    .catch(function(error) {
                        commit('SET_STATUS', 'error_create');
                        reject(error);
                    })
            });
        },

        login({ commit }, userInfos) {
            commit('SET_STATUS', 'loading');
            return new Promise((resolve, reject) => {
                instance.post('auth/login', userInfos)
                    .then(function(response) {
                        commit('SET_STATUS', 'login');
                        commit('LOG_USER', response.data);
                        resolve(response);
                    })
                    .catch(function(error) {
                        commit('SET_STATUS', 'error_login');
                        reject(error);
                    })
            });
        }
    }
})