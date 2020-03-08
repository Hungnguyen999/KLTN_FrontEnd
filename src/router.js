import Vue from 'vue'
import Router from 'vue-router'



//import HomePage_Guest from './modules/HomePage_Guest/HomePage_Guest'

Vue.use(Router)


/**
 * const BaseRoutes = [
    {
        path: '/',
        name: 'home-page',
        component: HomePage_Guest
    }
]
 */

import userRouter from './modules/router.js'
import adminRouter from "./admin-modules/router.js"
import userIndex from "./view/Index"
import adminIndex from "./view/Admin-Index"
import adminLoginPage from "./admin-modules/LoginPage/LoginPage"
const BaseRoutes = [
    {
        path: '/admin',
        component: adminIndex,
        children: adminRouter
    },
    {
        path: '/adminLogin',
        name: 'admin-login',
        component: adminLoginPage
    },
    {
        path: '/',
        component: userIndex,
        children: userRouter
    }
]

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: BaseRoutes,
    scrollBehavior() {
        return { x:0, y:0 }
    }
})


export default router