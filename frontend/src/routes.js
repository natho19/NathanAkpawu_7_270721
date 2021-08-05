import Signup from './views/users/Signup'
import Login from './views/users/Login'
import ModifyUser from './views/users/Modify'
import DeleteUser from './views/users/Delete'
import CreatePost from './views/posts/Create'
import Posts from './views/posts/Posts'
import Single from './views/posts/Single'

export default [
    { path: '/', component: Login },
    { path: '/signup', component: Signup },
    { path: '/modify-user', component: ModifyUser },
    { path: '/delete-user', component: DeleteUser },
    { path: '/create-post', component: CreatePost },
    { path: '/posts', component: Posts },
    { path: '/post/:id', component: Single }
]