import Vue from 'vue'
import VueRouter from "vue-router";
import authRoutes from '@/views/auth/auth.routes'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: 'auth'
    },
    {
        path: '/auth',
        name: 'auth',
        component: ()=> import('@/views/auth/auth.vue'),
        children: authRoutes,
        
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