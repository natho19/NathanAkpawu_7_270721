import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios')

const instance = axios.create({
    baseURL: 'http://localhost:3000/api/'
})

Vue.use(Vuex)

const defaultUser = {
    userId: -1,
    token: ''
}

let user = localStorage.getItem('user');

if (!user) {
    user = defaultUser;
} else {
    try {
        const user = JSON.parse(user);
        instance.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
    } catch(exception) {
        user = defaultUser;
    }
}

export default new Vuex.Store({
    state: {
        status: '',
        user: user,
        userInfos: {}
    },

    mutations: {
        SET_STATUS: function(state, status) {
            state.status = status;
        },

        LOG_USER: function(state, user) {
            instance.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
            localStorage.setItem('user', JSON.stringify(user));
            state.user = user;
        },

        LOG_OUT: function(state) {
            state.user = defaultUser;
        },

        USER_INFOS: function(state, userInfos) {
            state.userInfos = userInfos;
        },

        UPDATE_NAME: function(state, name) {
            state.userInfos.name = name
        },
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
        },

        getUserInfos({ commit, state }) {
            instance.get(`auth/user/${state.user.userId}`)
                .then(function(response) {
                    commit('USER_INFOS', response.data);
                })
                .catch(function(error) {
                    console.log(error);
                });
        },

        logout({ commit }) {
            commit('LOG_OUT');
            commit('SET_STATUS', '');
            localStorage.removeItem('user');
        }
    }
})