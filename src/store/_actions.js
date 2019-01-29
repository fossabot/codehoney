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
		let activeTag = getters.activeTag;

		commit(types.SELECT_TAG, { activeTag, id: payload })
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
	removeSnippet({ commit }, payload) {
		commit(types.REMOVE_SNIPPET, { payload })
	},
	editSnippet({ commit }, payload) {
		commit(types.EDIT_SNIPPET, { payload })
	},
	searchSnippet({ commit }, payload) {
		commit(types.SEARCH_SNIPPET, { payload })
	},
}

export default actions
