import Signup from './views/users/Signup'
import Login from './views/users/Login'
import ModifyUser from './views/users/Modify'
import DeleteUser from './views/users/Delete'
import CreatePost from './views/posts/Create'
import AllPosts from './views/posts/Posts'
import SinglePost from './views/posts/Single'
import ModifyPost from './views/posts/Modify'

export default [
    { path: '/', component: Login },
    { path: '/signup', component: Signup },
    { path: '/modify-user', component: ModifyUser },
    { path: '/delete-user', component: DeleteUser },
    { path: '/create-post', component: CreatePost },
    { path: '/posts', component: AllPosts },
    { path: '/post/:id', component: SinglePost },
    { path: '/modify-post/:id', component: ModifyPost }
]