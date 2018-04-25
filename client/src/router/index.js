import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import User from '@/components/User'
import Login from '@/components/LoginRegister'
import Util from '@/util'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                verification: true
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/user',
            name: 'User',
            component: User
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.meta.verification && !Util.getCookie('token')) {
        next({
            path: '/login',
            query: {
                redirect: to.fullPath
            }
        })
    } else {
        next()
    }
})

export default router
