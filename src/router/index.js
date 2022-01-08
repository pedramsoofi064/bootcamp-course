import Vue from 'vue'
import VueRouter from "vue-router";

import WelcomeView from '@/views/Welcome.vue'
import HomeView from '@/views/Home.vue'
import UsersView from '@/views/users/users.vue'
import UserView from '@/views/users/user.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: 'welcome' 
    },
    {
        path: '/welcome',
        name: 'welcome',
        component: WelcomeView
    },
    {
        path: '/home',
        name: 'home',
        component: HomeView
    },
    {
        path: '/users',
        name: 'users',
        component: UsersView,
        children: [
            {
            path: ':id',
            name: 'user',
            component: UserView,
           
        }]
    },
    {
        path: '*',
        name: 'notfound',
        component: ()=> import('@/views/404.vue'),
        
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to , from , next )=>{

    next()
})




export default router