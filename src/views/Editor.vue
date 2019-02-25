<template>
    <div class="Editor">
        <Headline
         v-if="snippet && Object.keys(snippet).length"
         :title="snippet.name"
         :description="snippet.description"
         @updateTitle="handleTitleChange"
         @updateDescription="handleDescriptionChange"
        />
        <Tags
         v-if="snippet && Object.keys(snippet).length"
         :tags="snippet.tags"
         @addTag="handleAddTag"
         @removeTag="handleRemoveTag"
        />
        <Toolbar
         :snippet="Object.keys(snippet).length>0"
         isExpanded
         @copy="handleCopy"
         @beautify="handleBeautify"
         @expand="handleExpand"
         @remove="handleRemove"
         @undo="handleUndo"
         @switchTheme="handleSwitchTheme"
        />
        <ThemeSwitcher
         isExpanded
         @switchTheme="handleSwitchTheme"
        />
        <Code
         v-if="snippet && Object.keys(snippet).length"
         :code="snippet.code"
         @update="handleCodeChange"
        />
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import beautify from 'js-beautify';
import uniqid from 'uniqid';

import Headline from '../components/editor/Headline.vue';
import Code from '../components/editor/Code.vue';
import Tags from '../components/editor/Tags.vue';
import Toolbar from '../components/editor/Toolbar.vue';
import ThemeSwitcher from '../components/editor/ThemeSwitcher.vue';

export default {
    name: 'Editor',
    components: {
        Headline,
        Code,
        Tags,
        Toolbar,
        ThemeSwitcher
    },
    props: {
        snippet: Object
    },
    data: () => ({
        isExpanded: false
    }),
    methods: {
        handleCopy() {
            navigator.clipboard.writeText(this.beautify(this.snippet.code));
        },
        handleBeautify() {
            this.handleCodeChange(this.beautify(this.snippet.code));
        },
        handleExpand() {
            this.$emit('expand');
            this.isExpanded = !this.isExpanded;
        },
        handleRemove() {
            this.removeSnippet(this.snippet.id);
        },
        handleTitleChange(title) {
            this.updateSnippet({ id: this.snippet.id, name: title });
        },
        handleDescriptionChange(description) {
            this.updateSnippet({ id: this.snippet.id, description });
        },
        handleCodeChange(code) {
            this.updateSnippet({ id: this.snippet.id, code });
        },
        handleUndo() {
            this.undo();
        },
        handleSwitchTheme({ theme, event }) {
            this.$emit('switchTheme', { theme, event });
            this.updateUserPreferences({ theme });
        },
        handleAddTag(tag) {
            let mTag = {
                id: uniqid(),
                name: tag,
                isSelected: false,
                counter: 1,

            }
            this.addTagToSnippet(mTag);
        },
        handleRemoveTag({index}){
            this.removeTagFromSnippet({index});
        },
        beautify(code) {
            let language = this.language.name.toLowerCase();
            let extention = {
                'javascript': 'js',
                'js': 'js',
                'vue': 'js',
                'react': 'js',
                'scss': 'css',
                'sass': 'css',
                'css': 'css',
                'hmtl': 'html'
            } [language];

            return beautify[extention] ? beautify[extention](code) : code;
        },
        ...mapActions([
            'addTagToSnippet',
            'removeSnippet',
            'removeTagFromSnippet',
            'updateSnippet',
            'undo',
            'updateUserPreferences'
        ]),
    },
    computed: { ...mapGetters({
            language: 'activeLanguage',
        }),
    }

};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.Editor {
    min-width: 575px;
    position: relative;
    z-index: 1;
    flex: 1;
    height: 100%;
    overflow: auto;
    padding-left: 65px;
    padding-right: 100px;
    padding-bottom: 50px;
}

</style>
