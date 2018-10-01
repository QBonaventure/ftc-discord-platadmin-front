import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from "./pages/Home.vue";
import GuildsHome from "./pages/GuildsHome.vue";
import GuildPage from './pages/GuildPage.vue';
import NotFound from "./pages/NotFound.vue";
import Resources from './pages/Resources.vue';
import LoginCallback from './pages/LoginCallback.vue';
import Login from './pages/Login.vue';



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
        path: "/guilds/:id",
        name: "GuildPage",
        meta: { layout: "default"},
        component: GuildPage
    },
    {
        path: "/resources",
        name: "Resources",
        meta: { layout: "default"},
        component: Resources
    },
    {
        path: "/login_callback",
        name: "LoginCallback",
        meta: { layout: "default"},
        component: LoginCallback
    },
    {
        path: "/login",
        name: "Login",
        meta: { layout: "default"},
        // component: Login,
        beforeEnter(to, from, next) {
          window.location.href = 'http://discord-oauth.fearthec.test/login';
        }
    },
    {
        path: "/logout",
        name: "Logout",
        beforeEnter(to, from, next) {
          localStorage.removeItem('user');
          return next('/');

        }
    },
    // {
    //     path: "/login",
    //     name: "Login",
    //     meta: { layout: "default"},
    //     component: Login
    // // },
    // //     beforeEnter: (to, from, next) => {
    // //         window.location.href=$loginUrl
    // //     }
    // },
    {
        path: "/*",
        name: "NotFound",
        meta: { layout: "no-side-bar" },
        component: NotFound
    },
];

Vue.use(VueRouter);

export default new VueRouter({
    routes,
    mode: "history"
});
