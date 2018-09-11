import Vue from 'vue';
import router from './router';
import App from './App.vue';
import moment from 'moment';
import VueSession from 'vue-session';

import Default from "./layouts/Default.vue";
import NoSideBar from "./layouts/NoSideBar.vue";

Vue.use(VueSession);


Vue.component('default-layout', Default);
Vue.component('no-side-bar-layout', NoSideBar);

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY hh:mm')
  }
  return null;
});

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
