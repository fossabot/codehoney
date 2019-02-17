<template>
    <div id="app">
        <Sidebar
            :languages="languages"
            :tags="tags"
            :isHidden="editorFullscreen"
            :class="[{'is-blured':modalIsOpen}]"
            @openModal="handleOpenModal"
        />
        <div
            class="Window"
            ref="window"
            :class="[{'is-expanded':editorFullscreen},{'is-blured':modalIsOpen}]"
        >
            <SnippetExplorer
                :snippets="snippetsFilteredBySearch || snippetsFilteredByTags || snippets" />
            <Editor
                :snippet="snippet"
                @expand="editorExpand"
                @switchTheme="switchTheme"
            />
            <SettingsModal
                :open="modalIsOpen"
                @close="handleCloseModal"
            >
            </SettingsModal>
        </div>
        <div class="WindowButtons">
            <WindowButton red />
            <WindowButton orange />
            <WindowButton green />
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Sidebar from './views/Sidebar.vue';
import SnippetExplorer from './views/SnippetExplorer.vue';
import Editor from './views/Editor.vue';
import WindowButton from './components/WindowButton.vue';
import SettingsModal from './components/SettingsModal.vue';

export default {
    name: 'app',
    components: {
        Sidebar,
        SnippetExplorer,
        Editor,
        WindowButton,
        SettingsModal
    },
    data: () => ({
        editorFullscreen: false,
        modalIsOpen: false
    }),
    computed: { ...mapGetters({
            languages: 'languages',
            language: 'activeLanguage',
            tags: 'tags',
            snippets: 'snippets',
            snippetsFilteredByTags: 'snippetsFilteredByTags',
            snippetsFilteredBySearch: 'snippetsFilteredBySearch',
            snippet: 'activeSnippet',
        }),
    },
    methods: {
        editorExpand() {
            this.editorFullscreen = !this.editorFullscreen;
        },
        switchTheme({ theme, event }) {
            this.themeTransition(theme, event);
            this.setThemeColors(theme.name);

        },
        themeTransition(theme, event) {
            let color = theme.color;
            let name = theme.name;
            let mWindow = this.$refs.window;
            let targetRect = event.target.getBoundingClientRect();
            let windowRect = mWindow.getBoundingClientRect();

            let x = targetRect.x - windowRect.x;
            let y = targetRect.y - windowRect.y;
            let circle = document.createElement('div');

            circle.classList.add('circle-expand');
            circle.setAttribute('style',
                `top:${y}px;
                left:${x}px;
                background:var(--color-theme-${name})`
            );
            mWindow.append(circle);

            setTimeout(() => {
                let width = window.outerWidth;
                let height = window.outerHeight
                if (width > height) {
                    circle.style.width = '220vw';
                    circle.style.height = '220vw';
                } else {
                    circle.style.width = '220vh';
                    circle.style.height = '220vh';
                }

            }, 20);

            setTimeout(() => {
                circle.remove();
            }, 1000);
        },
        setThemeColors(name) {
            setTimeout(() => {
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
            }, 320);
        },
        handleOpenModal(modal) {
            this.modalIsOpen = true;
        },
        handleCloseModal() {
            this.modalIsOpen = false;
        }
    }
};

</script>
<style lang="scss">
#app {
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  min-height: 665px;

  &::before{
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    background: var(--color-white);
    opacity: 0.9;
    transition: all .2s $ease;
    z-index: 0;
  }

  .Window {
    display: flex;
    border-radius: $windowBorder;
    margin: $windowDistance;
    margin-left: 0;
    width: 100%;
    min-width: 900px;
    background: var(--color-theme);
    position: relative;
    transition: all .500s $ease;
    overflow: hidden;
    z-index: 1;

    &.is-expanded {
      margin: 0;

      &::before {
        transform: translate(0, 0);
      }
    }

    &::before {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transform: translate(12px, 12px);
      content: "";
      position: absolute;
      background: inherit;
      opacity: 0.25;
      box-shadow: 10px 15px 20px 0 rgba(color(gray), 0.15);
      pointer-events: none;
      z-index: 0;
      transition: all .35s $ease;
    }
  }

  .WindowButtons {
    position: absolute;
    top: 10px;
    left: 20px;
    width: 100px;
    display: flex;
    height: 10px;
    z-index: 1;
  }

  .circle-expand {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color: var(--color-theme);
    position: absolute;
    transition: all .5s $ease;
    transform-origin: center;
    transform: translate(-50%,-50%);
  }
}

</style>
