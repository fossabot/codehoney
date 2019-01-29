const getters = {
	languages: state => {
		return state.languages;
	},
	tags: state => {
		return state.tags;
	},
	language: (state) => (id) => {
		return state.languages.find(language => language.id === id);
	},
	snippets: (state, getters) => {
		return getters.activeLanguage.snippets.sort((a, b) => b.timeStamp - a.timeStamp);
	},
	snippet: (state, getters) => id => {
		return getters.language.snippets[id];
	},
	activeLanguage: state => {
		return state.languages.find(language => language.isSelected);
	},
	activeTag: state => {
		return state.tags.find(tag => tag.isSelected) || {};
	},
	activeSnippet: (state, getters) => {
		let language = getters.activeLanguage;
		let activeSnippet = language.snippets.find(snippet => snippet.isSelected);
		return activeSnippet || {};
	}
}

export default getters
