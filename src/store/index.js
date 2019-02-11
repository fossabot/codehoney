import Vue from 'vue';
import Vuex from 'vuex';

import state from './_state'
import getters from './_getters'
import actions from './_actions'
import mutations from './_mutations'
import { version } from '../../package.json';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  state: Object.assign(state, { version }),
  getters,
  mutations,
  actions
});

store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state));
});

export default store;
