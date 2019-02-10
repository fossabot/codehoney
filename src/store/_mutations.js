import types from './_mutation-types'

const mutations = {
	[types.INITIALISE_STORE](state) {
		const localStorageStore = localStorage.getItem('store');

		if (localStorageStore) {
			let store = JSON.parse(localStorageStore);

			if (store.version === state.version) {
				this.replaceState(Object.assign(state, store));
			} else {
				store.version = state.version;
			}
		} else {
			const EMPTY_STATE = {
				'searchQuery': '',
				'activeTags': [],
				'languages': [{
					'id': 0,
					'name': 'Javascript',
					'isSelected': true,
					'snippets': [{
						'id': '1jryvaskz',
						'name': 'numWays(n, steps)',
						'description': "returns the numbers of possible ways to go N stairs up for a given set of steps",
						'code': "var num = 0;var steps = [1,2,4];function numWays(n) {if (n == 0) {num++;}for (var step of steps) {if (n - step >= 0) {  numWays(n - step);  }}}console.time();numWays(30);console.timeEnd();document.getElementById('num').innerHTML = 'Number of ways: ' + num;",
						'isSelected': true,
						'timeStamp': 1548799437196,
						'tags': ['cool function'],
					}]
				}],
				'tags': [{ "id": 0, "name": "welcome", "counter": 1, "isSelected": false }]
			}
			this.replaceState(Object.assign(state, EMPTY_STATE));
		}
	},
	[types.ADD_LANGUAGE](state, { /*milestone*/ }) {

	},
	[types.ADD_TAG](state, { /*milestone*/ }) {

	},
	[types.ADD_SNIPPET](state, { id, language }) {
		const SNIPPET = {
			id,
			name: "a beautiful new snippet",
			isSelected: false,
			code: "awesome new code",
			description: "snipp snipp snipp",
			tags: [],
			timeStamp: Date.now()
		};
		language.snippets.unshift(SNIPPET);
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
		let snippet = id ? snippets.find(snippet => snippet.id === id) : snippets[0];
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
	[types.UPDATE_SNIPPET](state, { activeSnippet, snippets, id, code, tag, name, description }) {
		let snippet = snippets.find(snippet => snippet.id === id);
		activeSnippet.code = code ? code : activeSnippet.code;
		activeSnippet.name = name ? name : activeSnippet.name;
		activeSnippet.description = description ? description : activeSnippet.description;
	},
	[types.SEARCH_SNIPPET](state, { payload }) {
		state.searchQuery = payload;
	},
}

export default mutations
