// router.js
import Vue from 'vue';
import Router from 'vue-router';
import App from './components/Index.vue';
import Item from './components/Item.vue'
Vue.use(Router);
export function createRouter () {
    return new Router({
        mode: 'history',
        routes: [
            { path: '/', component: App },
            { path: '/item', component: Item }
        ],
    })
}