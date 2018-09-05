import Vue from 'vue';
import router from './router';
import App from './App.vue';

import Default from "./layouts/Default.vue";

Vue.component('default-layout', Default);


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
