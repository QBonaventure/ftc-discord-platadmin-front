import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from "./pages/Home.vue";
import GuildsHome from "./pages/GuildsHome.vue";
import NotFound from "./pages/NotFound.vue";
import Resources from './pages/Resources.vue';
import Login from './pages/Login.vue';

const CLIENT_ID = '459649271566958593';
const CLIENT_SECRET = 'oJFhXUcc3PIuemzbfpL5CompdlhlCTH_';
const REDIRECT = encodeURIComponent('http://localhost:3030/login');

let $loginUrl = 'https://discordapp.com/oauth2/authorize?client_id='+CLIENT_ID+'&scope=identify&response_type=code&redirect_uri='+REDIRECT;



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
        path: "/login",
        name: "Login",
        meta: { layout: "default"},
        component: Login
    // },
    //     beforeEnter: (to, from, next) => {
    //         window.location.href=$loginUrl
    //     }
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
