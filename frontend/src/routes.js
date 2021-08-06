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
    { path: '/', component: Login },
    { path: '/signup', component: Signup },
    { path: '/modify-user', component: ModifyUser },
    { path: '/delete-user', component: DeleteUser },
    // Post routes
    { path: '/create-post', component: CreatePost },
    { path: '/posts', component: AllPosts },
    { path: '/post/:id', component: SinglePost },
    { path: '/modify-post/:id', component: ModifyPost },
    { path: '/delete-post/:id', component: DeletePost },
    // Comment routes
    { path: '/post/:postId/modify-comment/:id', component: ModifyComment },
    { path: '/post/:postId/delete-comment/:id', component: DeleteComment },
]