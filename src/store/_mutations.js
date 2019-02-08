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
			tags: [],
			timeStamp: Date.now()
		};
		language.snippets.unshift(snippet);
	},
	[types.SELECT_LANGUAGE](state, { id }) {
		let language = state.languages.find(language => language.id === id);
		state.languages.forEach(language => { language.isSelected = false });
		language.isSelected = true;
	},
	[types.SELECT_TAG](state, { tags, id }) {
		let tag = tags.find(tag => tag.id === id);
		if (tag.isSelected) {
			state.activeTags.splice(state.activeTags.indexOf(tag), 1);
			tag.isSelected = false
		} else {
			tag.isSelected = true;
			state.activeTags = [...state.activeTags, ...[tag]];
		}
		if (state.tags.length === 0) {
			state.tags = tags
		}
	},
	[types.SELECT_SNIPPET](state, { snippets, activeSnippet, id }) {
		let snippet = snippets.find(snippet => snippet.id === id);
		activeSnippet.isSelected = false;
		snippet.isSelected = true;
	},
	[types.REMOVE_LANGUAGE](state, { /*milestone*/ }) {

	},
	[types.REMOVE_TAG](state, { id }) {},
	[types.REMOVE_SNIPPET](state, { language, id }) {
		let index = language.snippets.findIndex(snippet => snippet.id === id);
		language.snippets.splice(index, 1);

		if (language.snippets.length) {
			let snippet = language.snippets[index - 1] || language.snippets[index]
			snippet.isSelected = true;
		}
	},
	[types.EDIT_SNIPPET](state, { /*milestone*/ }) {

	},
	[types.SEARCH_SNIPPET](state, { payload }) {
		state.searchQuery = payload;
	},
}

export default mutations
