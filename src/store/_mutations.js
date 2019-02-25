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
                if (name.length === 0) { return }

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
                'userPreferences': {
                    'theme': {
                        'name': '',
                    }
                },
                'languages': [],
                'tags': []
            }
            this.replaceState(Object.assign(state, EMPTY_STATE));
        }
    },
    [types.ADD_LANGUAGE](state, { language }) {
        state.languages.push(language);
    },
    [types.ADD_TAG](state, { tag }) {
        let tags = state.tags;
        let tagWithSameName = tags.find(t => t.name === tag.name);

        if (typeof tags === "object" && tagWithSameName) {
            tagWithSameName.counter++;
        } else {
            let mTags = [...new Set([...tags, ...[tag]])];
            state.tags = mTags;
        }
    },
    [types.ADD_TAG_TO_SNIPPET](state, { snippet, tag }) {
        snippet.tags.push(tag);
    },
    [types.ADD_SNIPPET](state, { id, language }) {
        let snippet = {
            id,
            name: "a beautiful new snippet",
            isSelected: false,
            code: "your awesome new code",
            description: "snipp snipp",
            tags: [],
            timeStamp: Date.now()
        };
        language.snippets.unshift(snippet);
    },
    [types.DELETE_HISTORY](state) {
        localStorage.clear();
        localStorage.setItem('store', JSON.stringify(state));
    },
    [types.EDIT_LANGUAGE_NAME](state, { language }) {
        language.isInEditMode = true;
    },
    [types.FINISH_EDIT_LANGUAGE_NAME](state) {
        state.languages.forEach(l => l.isInEditMode = false);
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
    [types.REMOVE_LANGUAGE](state, { language }) {
        let index = state.languages.findIndex(l => l.id === language.id);

        state.languages.splice(index, 1);
    },
    [types.REMOVE_TAG](state, { tag }) {
        let tags = state.tags;
        let tagWithSameName = tags.find(t => t.name === tag.name);

        if (typeof tags === "object" && tagWithSameName.counter > 1) {
            tagWithSameName.counter--;
        } else {
            let index = tags.findIndex(t => t.name === tag.name);
            tags.splice(index, 1);
        }
    },
    [types.REMOVE_TAG_FROM_SNIPPET](state, { snippet, index }) {
        snippet.tags.splice(index, 1);
    },
    [types.REMOVE_SNIPPET](state, { language, id }) {
        let index = language.snippets.findIndex(snippet => snippet.id === id);

        language.snippets.splice(index, 1);

        if (language.snippets.length) {
            let snippet = language.snippets[index - 1] || language.snippets[index]
            snippet.isSelected = true;
        }

    },
    [types.UPDATE_LANGUAGE_NAME](state, { id, name }) {
        let language = state.languages.find(l => l.id === id);

        if (language) {
            language.name = name;
            language.isInEditMode = false;
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

        userPreferences.theme = typeof theme === 'object' ? theme : userPreferences.theme;
        localStorage.setItem('user-preferences', JSON.stringify(state.userPreferences));
    }
}

export default mutations
