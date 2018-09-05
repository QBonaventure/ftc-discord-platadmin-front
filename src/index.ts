import Vue from 'vue';
import GuildsList from "./components/GuildsList.vue";
import VueRouter from 'vue-router';
import App from "./App.vue";


// const router = new VueRouter({
//   mode: 'hash',
//   routes: [
//     { path: '/', component: GuildsList },
//     { path: '/guilds', component: GuildsList }
// //    { path: '/config', component: Config },
//   ],
// });


let app = new Vue({
    // router,
    el: "#app",
//    provide: apolloProvider.provide(),
    template: `
    <div>
        <guilds-list />
    </div>`,
    data: { },
    components: {
        GuildsList
    }
});
