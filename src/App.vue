<template>
    <div id="app">
        <Sidebar
            :languages="languages"
            :tags="tags"
            :isHidden="editorFullscreen"
        />
        <div
            class="Window"
            ref="window"
            :class="{'is-expanded':editorFullscreen}"
        >
            <SnippetExplorer :snippets="snippetsFilteredBySearch || snippetsFilteredByTags || snippets" />
            <Editor
                :snippet="snippet"
                @expand="editorExpand"
                @switchTheme="switchTheme"
            />
        </div>
        <div class="WindowButtons">
            <WindowButton red />
            <WindowButton orange />
            <WindowButton green />
        </div>
    </div>
</template>
<script>
import Sidebar from './views/Sidebar.vue';
import SnippetExplorer from './views/SnippetExplorer.vue';
import Editor from './views/Editor.vue';
import WindowButton from "./components/WindowButton.vue"
import { mapGetters } from 'vuex'

export default {
    name: 'app',
    components: {
        Sidebar,
        SnippetExplorer,
        Editor,
        WindowButton
    },
    data: () => ({ editorFullscreen: false }),
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
            let color = theme.color;
            let name = theme.name;
            let targetRect = event.target.getBoundingClientRect();

            let circle = document.createElement('div');
            circle.classList.add('circle-expand');
            circle.setAttribute('style', `top:${targetRect.y}px;left:${targetRect.x}px;background:var(--color-theme-${name})`);
            this.$refs.window.append(circle);

            setTimeout(() => {
                circle.style.width = '500vh';
                circle.style.height = '500vh';
            }, 50);

            setTimeout(() => {
                let style = getComputedStyle(document.body);
                let color = style.getPropertyValue(`--color-theme-${name}`);
                let colorLight = style.getPropertyValue(`--color-theme-${name}-light`);
                let colorLighter = style.getPropertyValue(`--color-theme-${name}-lighter`);
                let colorDark = style.getPropertyValue(`--color-theme-${name}-dark`);
                let colorDarker = style.getPropertyValue(`--color-theme-${name}-darker`);

                document.documentElement.style.setProperty('--color-theme-light', colorLight);
                document.documentElement.style.setProperty('--color-theme-lighter', colorLighter);
                document.documentElement.style.setProperty('--color-theme-dark', colorDark);
                document.documentElement.style.setProperty('--color-theme-darker', colorDarker);

            }, 200);
            setTimeout(() => {
                let style = getComputedStyle(document.body);
                let color = style.getPropertyValue(`--color-theme-${name}`);

                document.documentElement.style.setProperty('--color-theme', color);
            }, 500);
            setTimeout(() => {
                circle.remove();
            }, 1000);
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
  background-color: rgba(#EFEFEF, 0.9);

  .Window {
    display: flex;
    border-radius: $windowBorder;
    margin: $windowDistance;
    margin-left: 0;
    width: 100%;
    min-width: 900px;
    background-color: var(--color-theme);
    position: relative;
    transition: all .500s $ease;
    transform: translateZ(0);
    overflow: hidden;

    &.is-expanded {
      margin: 0;

      &::before {
        transform: translate(0, 0);
      }
    }

    &::before {
      width: 100%;
      height: 100%;
      transform: translate(12px, 12px);
      content: "";
      position: absolute;
      background-color: var(--color-theme);
      opacity: 0.25;
      box-shadow: 10px 15px 20px 0 rgba(color(gray), 0.15);
      pointer-events: none;
      z-index: 0;
      transition: all .35s $ease;
      transform: translate(-50%,-50%);
    }
  }

  .WindowButtons {
    position: absolute;
    top: 10px;
    left: 20px;
    width: 100px;
    display: flex;
    height: 10px;
  }

  .circle-expand {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color: var(--color-theme);
    position: absolute;
    transition: all .35s $ease;
    transform: translate(-50%,-50%);
    transform-origin: center;
  }
}

</style>
