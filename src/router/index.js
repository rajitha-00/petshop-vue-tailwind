import {createRouter, createWebHistory } from "vue-router"

import HomePet from '../pages/HomePet.vue'
import LoginPet from '../views/LoginPet.vue'
import HomeAuth from '../views/HomeAuth.vue'
import ShopAll from '../views/ShopAll.vue'
const routes = [
    {
        name : 'HomePet',
        path : '/',
        component :HomePet

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

    },
    {
        name : 'HomeAuth',
        path : '/home',
        component : HomeAuth

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