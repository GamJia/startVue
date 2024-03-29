import Vue from 'vue';
import Vuex from 'vuex';

import { member } from './auth.module';

Vue.use(Vuex);

export default new Vuex.Store({
  state:{},
  mutations:{},
  actions:{},
  modules: {
    member
  }});