import Signup from './views/users/Signup'
import Login from './views/users/Login'
import ModifyUser from './views/users/Modify'
import DeleteUser from './views/users/Delete'
import CreatePost from './views/posts/Create'
import AllPosts from './views/posts/Posts'
import SinglePost from './views/posts/Single'
import ModifyPost from './views/posts/Modify'
import DeletePost from './views/posts/Delete'
import ModifyComment from './views/comments/Modify'
import DeleteComment from './views/comments/Delete'

export default [
    // User routes
    { path: '/', name:'login', component: Login },
    { path: '/signup', name:'signup', component: Signup },
    { path: '/modify-user', name:'modifyUser', component: ModifyUser },
    { path: '/delete-user', name:'deleteUser', component: DeleteUser },
    // Post routes
    { path: '/create-post', name:'createPost', component: CreatePost },
    { path: '/posts', name:'allPosts', component: AllPosts },
    { path: '/post/:id', name:'singlePost', component: SinglePost },
    { path: '/modify-post/:id', name:'modifyPost', component: ModifyPost },
    { path: '/delete-post/:id', name:'deletePost', component: DeletePost },
    // Comment routes
    { path: '/post/:postId/modify-comment/:id', name:'modifyComment', component: ModifyComment },
    { path: '/post/:postId/delete-comment/:id', name:'deleteComment', component: DeleteComment },
]