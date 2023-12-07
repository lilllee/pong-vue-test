// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import {createVfm} from "vue-final-modal";
const vfm = createVfm()

createApp(App).use(router, vfm).mount('#app');
