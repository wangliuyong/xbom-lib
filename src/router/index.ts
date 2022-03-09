import { createRouter, createWebHistory } from 'vue-router';

import Hello from '../page/HelloPage.vue'

const routes = [{
    path: '/hello',
    component: Hello
}]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default  router;
