// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import MainPage from "@/components/MainPage.vue";
import LoginPage from "@/components/LoginPage.vue";
import RoomList from "@/components/room/RoomList.vue";
import CreateRoom from "@/components/room/CreateRoom.vue";

const routes = [
    {
        path: '/'
        , name: 'LoginPage'
        , component: LoginPage
    }, {
        path: '/main/:nickname'
        , name: 'main'
        , component: MainPage
        , props:true
    }, {
        path: '/room'
        , name: 'room'
        , component: RoomList
    }, {
        path: '/createRoom'
        , name: 'createRoom'
        , component: CreateRoom
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
