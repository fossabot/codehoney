import types from './_mutation-types'

const mutations = {
    [types.INITIALISE_STORE](state) {
        const localStorageStore = localStorage.getItem('store');

        if (localStorageStore) {
            let store = JSON.parse(localStorageStore);

            if (store.version === state.version) {
                this.replaceState(Object.assign(state, store));
                state.undocounter = 0;
                let name = state.userPreferences.theme.name;

                let style = getComputedStyle(document.body);
                let color = style.getPropertyValue(`--color-theme-${name}`);
                let colorLight = style.getPropertyValue(`--color-theme-${name}-light`);
                let colorLighter = style.getPropertyValue(`--color-theme-${name}-lighter`);
                let colorDark = style.getPropertyValue(`--color-theme-${name}-dark`);
                let colorDarker = style.getPropertyValue(`--color-theme-${name}-darker`);

                document.documentElement.style.setProperty('--color-theme', color);
                document.documentElement.style.setProperty('--color-theme-light', colorLight);
                document.documentElement.style.setProperty('--color-theme-lighter', colorLighter);
                document.documentElement.style.setProperty('--color-theme-dark', colorDark);
                document.documentElement.style.setProperty('--color-theme-darker', colorDarker);
            } else {
                store.version = state.version;
            }
        } else {
            const EMPTY_STATE = {
                'searchQuery': '',
                'activeTags': [],
                'undocounter': '0',
                'userPreferences': {},
                'languages': [{
                    'id': 0,
                    'name': 'javascript',
                    'isSelected': true,
                    'snippets': []
                }, {
                    'id': 1,
                    'name': 'scss',
                    'isSelected': false,
                    'snippets': []
                }, {
                    'id': 2,
                    'name': 'markdown',
                    'isSelected': false,
                    'snippets': []
                }, {
                    'id': 3,
                    'name': 'PHP',
                    'isSelected': false,
                    'snippets': []
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
        activeSnippet.code = typeof code === 'string' ? code : activeSnippet.code;
        activeSnippet.name = typeof name === 'string' ? name : activeSnippet.name;
        activeSnippet.description = typeof description === 'string' ? description : activeSnippet.description;
    },
    [types.SEARCH_SNIPPET](state, { payload }) {
        state.searchQuery = payload;
    },
    [types.UNDO](state) {
        state.undocounter = state.undocounter - 1;

        if (state.undocounter < 0) return;
        let key = 'store-snapshot-' + state.undocounter;
        const storeSnapshot = localStorage.getItem(key);
        if (storeSnapshot) {
            let store = JSON.parse(storeSnapshot);
            this.replaceState(Object.assign(state, store));
            localStorage.removeItem(key);
        }
    },
    [types.UNDO_INCREMENT](state) {
        state.undocounter++;
    },
    [types.UPDATE_USER_PREFERENCES](state, { theme }) {
        let userPreferences = state.userPreferences;
        console.log(theme)
        userPreferences.theme = typeof theme === 'object' ? theme : userPreferences.theme;
        localStorage.setItem('user-preferences', JSON.stringify(state.userPreferences));
    }
}

export default mutations
