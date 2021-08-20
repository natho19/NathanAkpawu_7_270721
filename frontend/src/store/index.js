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
        post: {},
        comments: [],
        comment: {}
    },

    getters: {
        userName: state => {
            return state.userInfos.name;
        },

        hasPostRole: state => {
            if (state.userInfos.id === state.post.userId) {
                return true;
            } else {
                return false;
            }
        },

        hasCommentRole: (state) => (index) => {
            if (state.userInfos.id === state.comments[index].userId) {
                return true;
            } else {
                return false;
            }
        },

        isAdmin: state => {
            if (state.userInfos.isAdmin) {
                return true;
            } else {
                return false
            }
        },

        contentExcerpt: (state) => (index) => {
            const content = state.posts[index].content;
            if (content.length > 150) {
                return content.substring(0, 150) + '...';
            } else {
                return content;
            }
        }
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

        SET_USER_NAME: function(state, modifiedName) {
            state.userInfos.name = modifiedName;
        },

        POSTS_LIST: function(state, posts) {
            state.posts = posts;
        },

        SINGLE_POST: function(state, post) {
            state.post = post;
        },

        CREATE_POST: function(state, newPost) {
            state.posts.unshift(newPost);
        },

        SET_POST_TITLE: function(state, modifiedTitle) {
            state.post.title = modifiedTitle;
        },

        SET_POST_CONTENT: function(state, modifiedPostContent) {
            state.post.content = modifiedPostContent;
        },

        COMMENTS_LIST: function(state, comments) {
            state.comments = comments;
        },

        SINGLE_COMMENT: function(state, comment) {
            state.comment = comment;
        },

        CREATE_COMMENT: function(state, newComment) {
            state.comment = newComment
        },

        SET_COMMENT: function(state, modifiedCommentContent) {
            state.comment.content = modifiedCommentContent;
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
                        commit('CREATE_POST', newPost);
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
            if (state.userInfos.isAdmin) {
                return new Promise((resolve, reject) => {
                    instance.delete(`posts/admin/${state.post.id}`)
                        .then(function(response) {
                            resolve(response);
                        })
                        .catch(function(error) {
                            reject(error);
                        })
                });
            } else {
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
        },

        getAllComments({ commit }, id) {
            return new Promise((resolve, reject) => {
                instance.get(`posts/${id}/comments`)
                    .then(function(response) {
                        commit('COMMENTS_LIST', response.data);
                        resolve(response);
                    })
                    .catch(function(error) {
                        reject(error);
                    });
            });
        },

        getOneComment({ commit }, { postId, id }) {
            return new Promise((resolve, reject) => {
                instance.get(`posts/${postId}/comments/${id}`)
                    .then(function(response) {
                        commit('SINGLE_COMMENT', response.data);
                        resolve(response);
                    })
                    .catch(function(error) {
                        reject(error);
                    })
            });
        },

        createComment({ commit }, { id, newComment }) {
            return new Promise((resolve, reject) => {
                instance.post(`posts/${id}/comments`, newComment)
                    .then(function(response) {
                        commit('CREATE_COMMENT', newComment);
                        resolve(response);
                    })
                    .catch(function(error) {
                        reject(error);
                    })
            });
        },

        editComment({ state }, modifiedComment) {
            return new Promise((resolve, reject) => {
                instance.put(`posts/${state.comment.postId}/comments/${state.comment.id}}`, modifiedComment)
                    .then(function(response) {
                        resolve(response);
                    })
                    .catch(function(error) {
                        reject(error);
                    })
            });
        },

        deleteComment({ state }, { postId, id }) {
            if (state.userInfos.isAdmin) {
                return new Promise((resolve, reject) => {
                    instance.delete(`posts/admin/${postId}/comments/${id}`)
                        .then(function(response) {
                            resolve(response);
                        })
                        .catch(function(error) {
                            reject(error);
                        })
                });
            } else {
                return new Promise((resolve, reject) => {
                    instance.delete(`posts/${postId}/comments/${id}`, { data: { userId: state.userInfos.id } })
                        .then(function(response) {
                            resolve(response);
                        })
                        .catch(function(error) {
                            reject(error);
                        })
                });
            }
        },
    }
})