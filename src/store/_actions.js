import types from './_mutation-types'

const actions = {
	addLanguage({ commit }, payload) {
		commit(types.ADD_LANGUAGE, { payload })
	},
	addTag({ commit }, payload) {
		commit(types.ADD_TAG, { payload })
	},
	addSnippet({ getters, commit }, id) {
		let language = getters.activeLanguage;
		commit(types.ADD_SNIPPET, { id, language })
	},
	selectLanguage({ commit }, payload) {
		commit(types.SELECT_LANGUAGE, { id: payload })
	},
	selectTag({ getters, commit }, payload) {
		let snippets = getters.snippets;
		let tags = getters.tags;
		commit(types.SELECT_TAG, { tags, id: payload, snippets })
	},
	selectSnippet({ getters, commit }, id) {
		let snippets = getters.activeLanguage.snippets;
		let activeSnippet = getters.activeSnippet;

		commit(types.SELECT_SNIPPET, { snippets, activeSnippet, id })
	},
	removeLanguage({ commit }, payload) {
		commit(types.REMOVE_LANGUAGE, { payload })
	},
	removeTag({ commit }, payload) {
		commit(types.REMOVE_TAG, { payload })
	},
	removeSnippet({ getters, commit }, payload) {
		let language = getters.activeLanguage;
		commit(types.REMOVE_SNIPPET, { id: payload, language })
	},
	editSnippet({ commit }, payload) {
		commit(types.EDIT_SNIPPET, { payload })
	},
	searchSnippet({ commit }, payload) {
		commit(types.SEARCH_SNIPPET, { payload })
	},
}

export default actions
