const getters = {
	languages: state => {
		return state.languages.map((language) => {
			return Object.assign({ counter: language.snippets.length }, language);
		})
	},
	tags: state => {
		if(state.tags.length) return state.tags;

		// let tagCounter = [];
		// state.languages.forEach((language) => {
		// 	language.snippets.forEach((snippet) => {
		// 		let tags = snippet.tags;
		// 		tags.forEach((tag) => {
		// 			tagCounter[tag] = tagCounter[tag] ? tagCounter[tag] + 1 : 1;
		// 		})
		// 	});
		// });
		// let tags = [];
		// let i = 0;
		// for (let key in tagCounter) {
		// 	tags.push({ 'name': key, 'id': i++, isSelected: false, counter: tagCounter[key] })
		// }
		// return tags;
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
	searchQuery: state => {
		return state.searchQuery;
	},
	activeTags: (state, getters) => {
		return getters.tags.filter(tag => tag.isSelected) || [];
	},
	activeSnippet: (state, getters) => {
		let language = getters.activeLanguage;
		let activeSnippet = language.snippets.find(snippet => snippet.isSelected);
		return activeSnippet || {};
	},
	snippetsFilteredByTags: (state, getters) => {
		let filters = [];
		for (let tag of getters.activeTags) {
			filters.push(tag.name);
		}
		if (filters && filters.length > 0) {
			return getters.snippets.filter(({tags}) => (filters.every(f => tags.includes(f))));
		}
		return null;
	},
	snippetsFilteredBySearch: (state, getters) => {
		let filter = getters.searchQuery ? getters.searchQuery : null;
		let snippets = getters.snippetsFilteredByTags || getters.snippets;

		if (filter) {
			return snippets.filter(snippet => snippet.name.includes(filter) || snippet.code.includes(filter) || snippet.description.includes(filter) || snippet.tags.includes(filter));
		}
		return null;
	},
}

export default getters
