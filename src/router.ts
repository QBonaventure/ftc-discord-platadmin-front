import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from "./pages/Home.vue";
import GuildsHome from "./pages/GuildsHome.vue";
import NotFound from "./pages/NotFound.vue";
import Resources from './pages/Resources.vue';


const routes = [
    {
        path: "/",
        name: "Home",
        meta: { layout: "default"},
        component: Home
    },
    {
        path: "/guilds",
        name: "GuildHome",
        meta: { layout: "default"},
        component: GuildsHome
    },
    {
        path: "/resources",
        name: "Resources",
        meta: { layout: "default"},
        component: Resources
    },
    {
        path: "/*",
        name: "NotFound",
        meta: { layout: "no-side-bar" },
        component: NotFound
    }
];

Vue.use(VueRouter);

export default new VueRouter({
    routes,
    mode: "history"
});
