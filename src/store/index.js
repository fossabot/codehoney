import Vue from 'vue';
import Vuex from 'vuex';

import state from './_state'
import getters from './_getters'
import actions from './_actions'
import mutations from './_mutations'

Vue.use(Vuex);

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
});
