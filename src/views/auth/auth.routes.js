

const routes = [
    {
        path: '',
        redirect: 'login',
    },
    {
        path: 'login',
        name: 'login',
        component: ()=> import('./login/login.vue')
    },
    {
        path: 'register',
        name: 'register',
        component: ()=> import('./register/register.vue')
    },

]


export default routes;