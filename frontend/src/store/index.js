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
        user = JSON.parse(user);
        instance.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
    } catch(exception) {
        user = defaultUser;
    }
}

export default new Vuex.Store({
    state: {
        status: '',
        user: user,
        userInfos: {},
        posts: [],
        post: {}
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
            state.userInfos = {}
        },

        USER_INFOS: function(state, userInfos) {
            state.userInfos = userInfos;
        },

        SET_USER_NAME: function(state, newName) {
            state.userInfos.name = newName;
        },

        CREATE_POST: function(state, newPost) {
            state.posts.unshift(newPost);
        },

        POSTS_LIST: function(state, posts) {
            state.posts = posts;
        },

        SINGLE_POST: function(state, post) {
            state.post = post;
        },

        SET_POST_TITLE: function(state, newTitle) {
            state.post.title = newTitle;
        },

        SET_POST_CONTENT: function(state, newContent) {
            state.post.content = newContent;
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
        },

        logout({ commit }) {
            commit('LOG_OUT');
            commit('SET_STATUS', '');
            localStorage.removeItem('user');
        },

        getUserInfos({ commit, state }) {
            return new Promise((resolve, reject) => {
                instance.get(`auth/user/${state.user.userId}`)
                    .then(function(response) {
                        commit('USER_INFOS', response.data);
                        resolve(response);
                    })
                    .catch(function(error) {
                        reject(error);
                    });
            });
        },

        editUserName({ state }, userNewName) {
            return new Promise((resolve, reject) => {
                instance.put(`auth/user/${state.userInfos.id}`, userNewName)
                    .then(function(response) {
                        resolve(response);
                    })
                    .catch(function(error) {
                        reject(error);
                    })
            });
        },

        deleteUser({ state }) {
            return new Promise((resolve, reject) => {
                instance.delete(`auth/user/${state.userInfos.id}`)
                    .then(function(response) {
                        resolve(response);
                    })
                    .catch(function(error) {
                        reject(error);
                    })
            });
        },

        createPost({ commit }, newPost) {
            return new Promise((resolve, reject) => {
                instance.post('posts', newPost, {'Content-Type': 'application/form-data'})
                    .then(function(response) {
                        commit('CREATE_POST', response.data);
                        resolve(response);
                    })
                    .catch(function(error) {
                        reject(error);
                    });
            });
        },

        getAllPosts({ commit }) {
            return new Promise((resolve, reject) => {
                instance.get('posts')
                    .then(function(response) {
                        commit('POSTS_LIST', response.data);
                        resolve(response);
                    })
                    .catch(function(error) {
                        reject(error);
                    });
            });
        },

        getOnePost({ commit }, id) {
            return new Promise((resolve, reject) => {
                instance.get(`posts/${id}`)
                    .then(function(response) {
                        commit('SINGLE_POST', response.data);
                        resolve(response);
                    })
                    .catch(function(error) {
                        reject(error);
                    })
            });
        },

        modifyPost({ state }, modifiedPost) {
            return new Promise((resolve, reject) => {
                instance.put(`posts/${state.post.id}`, modifiedPost, {'Content-Type': 'application/form-data'})
                    .then(function(response) {
                        resolve(response);
                    })
                    .catch(function(error) {
                        reject(error);
                    });
            });
        },

        deletePost({ state }) {
            return new Promise((resolve, reject) => {
                instance.delete(`posts/${state.post.id}`, { data: { userId: state.post.User.id } })
                    .then(function(response) {
                        resolve(response);
                    })
                    .catch(function(error) {
                        reject(error);
                    })
            });
        }
    }
})