import types from './_mutation-types'

const actions = {
    addLanguage({ commit }, language) {
        commit(types.ADD_LANGUAGE, { language })
    },
    addTag({ commit }, payload) {
        commit(types.ADD_TAG, { payload })
    },
    addSnippet({ dispatch, getters, commit }, id) {
        let language = getters.activeLanguage;
        commit(types.ADD_SNIPPET, { id, language })
        dispatch('selectSnippet', id);
    },
    selectLanguage({ commit }, payload) {
        commit(types.SELECT_LANGUAGE, { id: payload })
    },
    selectTag({ dispatch, getters, commit }, payload) {
        let tags = getters.tags;
        commit(types.SELECT_TAG, { tags, id: payload });
        let snippet = getters.snippetsFilteredByTags && getters.snippetsFilteredByTags[0];

        dispatch('selectSnippet', snippet ? snippet.id : 0);
    },
    selectSnippet({ getters, commit }, id = null) {
        let snippets = getters.activeLanguage.snippets;
        let activeSnippet = getters.activeSnippet;
        commit(types.SELECT_SNIPPET, { snippets, activeSnippet, id })
    },
    removeLanguage({ getters, commit }, payload) {
        let language = getters.activeLanguage;
        commit(types.REMOVE_LANGUAGE, { language })
    },
    removeTag({ commit }, payload) {
        commit(types.REMOVE_TAG, { payload })
    },
    removeSnippet({ getters, commit }, payload) {
        let language = getters.activeLanguage;
        commit(types.REMOVE_SNIPPET, { id: payload, language })
    },
    updateSnippet({ getters, commit }, payload) {
        let snippets = getters.activeLanguage.snippets;
        let activeSnippet = getters.activeSnippet;

        commit(types.UPDATE_SNIPPET, { activeSnippet, snippets, ...payload })
    },
    searchSnippet({ dispatch, commit }, payload) {
        commit(types.SEARCH_SNIPPET, { payload });
        dispatch('selectSnippet');
    },
    undo({ commit }, payload) {
        commit(types.UNDO);
    },
    undoIncrement({ commit }) {
        commit(types.UNDO_INCREMENT);
    },
    updateUserPreferences({ commit }, payload) {
        commit(types.UPDATE_USER_PREFERENCES, payload);
    }
}

export default actions
