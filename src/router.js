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

import BaseRoutes from './modules/router.js'

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: BaseRoutes,
    scrollBehavior() {
        return { x:0, y:0 }
    }
})


export default router