import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import { router } from './router'
import store from './store'
import Vuex from 'vuex';
import Vue2Editor from 'vue2-editor';
import VeeValidate from 'vee-validate';
import setupInterceptors from './services/setupInterceptors'
import VueCookies from "vue-cookies"

import "@/fontAwesomeIcon.js";

Vue.use(Vue2Editor);
Vue.use(VeeValidate);
Vue.use(Vuex);
Vue.use(VueCookies);

Vue.$cookies.config("1d")
setupInterceptors(store);
Vue.config.productionTip = false

new Vue({
  router,
  store, 

  render: h => h(App)
}).$mount('#app')

