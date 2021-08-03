import Signup from './views/Signup'
import Login from './views/Login'
import Modify from './views/Modify'
import Delete from './views/Delete'

export default [
    { path: '/', component: Login },
    { path: '/signup', component: Signup },
    { path: '/account/:id', component: Modify },
    { path: '/delete/:id', component: Delete }
]