<template>
    <div
        class="Sidebar"
        :class="{'is-hidden':isHidden}"
    >
        <Icon
            @click="openModal"
            icon="settings"
            name="settings"
            hint="settings"
            morphTo="settings-2"
            class="Icon--settings"
            fill="var(--color-theme-dark)"
        />
        <Categories
            title="Categories"
            :categories="languages"
            :hasAddButton="true"
            @select="selectLanguage"
            @context-menu="handleShowContextMenu"
            @add="handleAddLanguage"
            @update="handleUpdateLanguage"
        />
        <Categories
            title="Tags"
            :categories="tags"
            @select="selectTag"
        />
        <img
            svg-inline
            class="Logo"
            src="@/assets/logo.svg"
        >
        <BaseContextMenu
            :visible="showContextMenu"
            :top="contextMenuTop"
            :left="contextMenuLeft"
            :items="contextMenuItems"
            @click="handleBaseContextClick"
        />
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import uniqid from 'uniqid';
import Categories from '../components/sidebar/Categories.vue';
import BaseContextMenu from '../components/BaseContextMenu.vue';

export default {
    name: 'Sidebar',
    props: {
        languages: Array,
        tags: Array,
        isHidden: Boolean,
    },
    components: {
        Categories,
        BaseContextMenu
    },
    data: () => ({
        showContextMenu: false,
        contextMenuTop: 0,
        contextMenuLeft: 0,
        contextMenuItems: [{
            name: 'rename category',
            cb: 'editLanguageName'
        }, {
            name: 'delete category',
            cb: 'removeLanguage'
        }],
    }),
    methods: {
        ...mapActions([
            'addLanguage',
            'addSnippet',
            'editLanguageName',
            'removeLanguage',
            'selectLanguage',
            'selectTag',
            'updateLanguageName',
        ]),
        handleAddLanguage(name) {
            let id = uniqid();
            let language = {
                id,
                name,
                isSelected: false,
                snippets: [],
                isInEditMode: false
            }
            this.addLanguage(language);
            this.selectLanguage(id);
            this.addSnippet(uniqid())
        },
        handleUpdateLanguage({ id, name }) {
            console.log(id,name)
            this.updateLanguageName({ id, name });
        },
        handleShowContextMenu({ x = event.x, y = event.y, id }) {
            this.selectLanguage(id);
            this.contextMenuTop = y;
            this.contextMenuLeft = x;

            if (this.showContextMenu) {
                this.showContextMenu = false;
                setTimeout(() => {
                    this.showContextMenu = true;
                }, 50);
            } else {
                this.showContextMenu = true;
            }
        },
        handleBaseContextClick(cb) {
            console.log('msg')
            cb && this[cb]()
        },
        openModal() {
            this.$emit('openModal', 'settings');
        }
    }
};

</script>
<style lang="scss">
.Sidebar {
    width: 16%;
    min-width: 225px;
    max-width: 225px;
    padding-top: $appDistanceTop;
    position: relative;
    transition: all .35s $ease;
    will-change: width;

    &.is-hidden {
        width: 0;
        min-width: 0;
    }

    .Logo {
        position: absolute;
        bottom: $appDistanceBottom * 1.35;
        left: 50%;
        transform: translateX(-50%);
        display: block;
        width: 50%;
        user-select: none;
    }

    .Icon--settings {
        position: absolute;
        right: 20px;
        top: 54px;
        cursor: pointer;
        z-index: zIndex(default);
    }
}

</style>
