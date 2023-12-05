// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import MainPage from "@/components/MainPage.vue";
import LoginPage from "@/components/LoginPage.vue";

const routes = [
    {
        path: '/',
        name: 'LoginPage',
        component: LoginPage
    }
    , {
        path: '/main',
        name: 'main',
        component: MainPage
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
