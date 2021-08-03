import Signup from './views/users/Signup'
import Login from './views/users/Login'
import Modify from './views/users/Modify'
import Delete from './views/users/Delete'
import New from './views/posts/New'

export default [
    { path: '/', component: Login },
    { path: '/signup', component: Signup },
    { path: '/modify-user', component: Modify },
    { path: '/delete-user', component: Delete },
    { path: '/create-post', component: New }
]