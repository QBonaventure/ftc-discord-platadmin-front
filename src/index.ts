import Vue from 'vue';
import GuildsList from "./components/GuildsList.vue";
//import { ApolloClient } from 'apollo-client';
//import { HttpLink } from 'apollo-link-http';
//import { InMemoryCache } from 'apollo-cache-inmemory';
//import VueApollo from "vue-apollo";


//Vue.config.productionTip = false
//
//const httpLink = new HttpLink({
//  uri: 'http://graphql-su.ftcbot-dev.test/graphql',
//  fetchOptions: {
//    mode: 'no-cors'
//  }
//})
//
//const apolloClient = new ApolloClient({
//  link: httpLink,
//  cache: new InMemoryCache(),
//  connectToDevTools: true
//})
//
//Vue.use(VueApollo)
//
//const apolloProvider = new VueApollo({
//  defaultClient: apolloClient,
//  defaultOptions: {
//    $loadingKey: 'loading'
//  }
//})
//
//Vue.use(VueApollo);


let v = new Vue({
    el: "#app",
//    provide: apolloProvider.provide(),
    template: `
    <div>
        <guilds-list />
    </div>`,
    data: { name: "World" },
    components: {
        GuildsList
    }
});