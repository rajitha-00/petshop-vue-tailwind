import {createRouter, createWebHistory } from "vue-router"

import HomePet from '../pages/HomePet.vue'
import LoginPet from '../pages/LoginPet.vue'
import ShopAll from '../components/shop/ShopAll.vue'
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
        path : '/shop/all',
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