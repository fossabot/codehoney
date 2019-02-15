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

store.subscribeAction({
    before: (action, state) => {
        const actions = [
            'selectSnippet',
            'undo',
            'undoIncrement',
            'selectTag',
            'selectLanguage',
            'searchSnippet'
        ];
        if (actions.includes(action.type)) return;
        localStorage.setItem('store-snapshot-' + state.undocounter, JSON.stringify(state));
    },
    after: (action, state) => {}
});

store.subscribe((mutation, state) => {
    const mutationTypes = ['SELECT_SNIPPET', 'UNDO', 'UNDO_INCREMENT', 'INITIALISE_STORE'];
    if (mutationTypes.includes(mutation.type)) return;

    store.dispatch('undoIncrement');
    localStorage.setItem('store', JSON.stringify(state));
});

export default store;
