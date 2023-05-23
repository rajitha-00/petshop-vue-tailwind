import {createRouter, createWebHistory } from "vue-router"


import LoginPet from '../views/LoginPet.vue'
import HomeAuth from '../views/HomeAuth.vue'
import ShopAll from '../views/ShopAll.vue'
const routes = [
    {
        name : 'HomeAuth',
        path : '/',
        component :HomeAuth

    },
    {
        name : 'LoginPet',
        path : '/login',
        component : LoginPet
                         

    },
    {
        name : 'ShopAll',
        path : '/shop',
        component : ShopAll

    }
];

const router = Router( );

export default router;

function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}