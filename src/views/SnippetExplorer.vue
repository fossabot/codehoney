<template>
    <div class="SnippetExplorer">
        <Search v-if="languages.length>0" />
        <Snippets
         :snippets="snippets"
         @select="selectSnippet"
        />
        <BaseButton
         round
         icon
         :class="{'is-active':languages.length>0}"
        >
            <Icon
             @click.native="handleClick"
             icon="add"
             fill="var(--color-white)"
            />
        </BaseButton>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import uniqid from 'uniqid';
import BaseButton from '../components/BaseButton.vue';
import Search from '../components/snippetExplorer/Search.vue';
import Snippets from '../components/snippetExplorer/Snippets.vue';

export default {
    name: 'SnippetExplorer',
    components: {
        BaseButton,
        Search,
        Snippets,
    },
    props: {
        snippets: Array,
    },
    data: () => ({}),
    computed: {
        ...mapGetters({
            languages: 'languages'
        })
    },
    methods: {
        handleClick() {
            let uID = uniqid();
            this.addSnippet(uID);
        },
        ...mapActions([
            'selectSnippet',
            'addSnippet'
        ])
    }
};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.SnippetExplorer {
    width: 25%;
    min-width: 255px;
    max-width: 335px;
    overflow: hidden;
    position: relative;
    z-index: 1;

    &::before {
        position: absolute;
        content: "";
        right: 2px;
        height: 100%;
        top: 0;
        width: 1px;
        background-color: rgba(white, 0.1);
    }

    .BaseButton {
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%) scale(0);
        z-index: zIndex(default) + 10;
        padding: 10px;

        &.is-active {
            transform: translateX(-50%) scale(1);
        }

        &:hover {
            background-color: darken(color(orange), 10%);
            background-color: var(--color-theme-lighter);
        }

    }
}

</style>
