import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/over',
        name: 'Over',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/activities',
        name: 'Activiteiten',
        component: () => import(/* webpackChunkName: "activities" */ '../views/Activities.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunckName: "login" */ '../views/Login')
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router
