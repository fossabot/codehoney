import types from './_mutation-types'

const mutations = {
	[types.ADD_LANGUAGE](state, { /*milestone*/ }) {

	},
	[types.ADD_TAG](state, { /*milestone*/ }) {

	},
	[types.ADD_SNIPPET](state, { id, language }) {
		let snippet = {
			id,
			name: "a beautiful new snippet",
			isSelected: false,
			code: "awesome new code",
			description: "snipp snipp snipp",
			timeStamp: Date.now()
		};
		language.snippets.unshift(snippet);
	},
	[types.SELECT_LANGUAGE](state, { id }) {
		let language = state.languages.find(language => language.id === id);

		state.languages.forEach(language => { language.isSelected = false });
		language.isSelected = true;
	},
	[types.SELECT_TAG](state, { activeTag, id }) {
		let tag = state.tags.find(tag => tag.id === id);

		tag.isSelected ? tag.isSelected = false : tag.isSelected = true;
		activeTag.isSelected = false;
	},
	[types.SELECT_SNIPPET](state, { snippets, activeSnippet, id }) {
		let snippet = snippets.find(snippet => snippet.id === id);
		activeSnippet.isSelected = false;
		snippet.isSelected = true;
	},
	[types.REMOVE_LANGUAGE](state, { /*milestone*/ }) {

	},
	[types.REMOVE_TAG](state, { /*milestone*/ }) {

	},
	[types.REMOVE_SNIPPET](state, { /*milestone*/ }) {

	},
	[types.EDIT_SNIPPET](state, { /*milestone*/ }) {

	},
	[types.SEARCH_SNIPPET](state, { /*milestone*/ }) {

	},
}

export default mutations
