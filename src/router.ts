import Vue from 'vue';
import Router from 'vue-router';

import Home from "./pages/Home.vue";
import GuildsHome from "./pages/GuildsHome.vue";
import NotFound from "./pages/NotFound.vue";

Vue.use(Router);

const base = "/";

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
        path: "/*",
        name: "NotFound",
        meta: { layout: "default" },
        component: NotFound
    }
];

export default new Router({
    // mode: "history",
    // base,
    routes,
    mode: "history"
});
