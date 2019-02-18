const getters = {
    languages: state => {
        return state.languages.map((language) => {
            return Object.assign({ counter: language.snippets.length }, language);
        });
    },
    tags: state => {
        return state.tags;
    },
    language: (state) => (id) => {
        return state.languages.find(language => language.id === id);
    },
    snippets: (state, getters) => {
        if (!getters.activeLanguage) return [];
        return getters.activeLanguage.snippets;
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
        if (!getters.activeLanguage) return {};

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
            return getters.snippets.filter(({ tags }) => (filters.every(f => tags.includes(f))));
        }
        return null;
    },
    snippetsFilteredBySearch: (state, getters) => {
        let query = getters.searchQuery;
        let filter = query && query.length > 0 ? query : null;
        let snippets = getters.snippetsFilteredByTags || getters.snippets;

        if (filter) {
            return snippets.filter(snippet => snippet.name.includes(filter) || snippet.code.includes(filter) || snippet.description.includes(filter) || snippet.tags.includes(filter));
        }
        return null;
    },
    undoCounter: (state) => { return state.undocounter; }
}

export default getters
