<template>
  <div id="app">
    <Sidebar :data="snippets" />
    <div class="Window">
      <SnippetsBox :data="snippets" />
      <Editor />
    </div>
    <div class="WindowButtons">
      <WindowButton :red="true" />
      <WindowButton :orange="true" />
      <WindowButton :green="true" />
    </div>
  </div>
</template>
<script>
import Sidebar from './views/Sidebar.vue';
import SnippetsBox from './views/SnippetsBox.vue';
import Editor from './views/Editor.vue';
import WindowButton from "./components/WindowButton.vue"
import dummyData from "./data/dummyData.json"

export default {
  name: 'app',
  components: {
    Sidebar,
    SnippetsBox,
    Editor,
    WindowButton
  },
  data: () => {
    return {
      snippets: dummyData
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
    background-color: rgba(color(purple), 0.98);
    position: relative;

    &::before {
      width: 100%;
      height: 100%;
      top: 7px;
      left: 7px;
      content: "";
      position: absolute;
      background-color: rgba(color(purple), 0.25);
      box-shadow: 10px 15px 20px 0 rgba(color(gray), 0.15);
      pointer-events: none;
      z-index: 0;
    }

    // &::after {
    //   width: 100%;
    //   height: 100%;
    //   top: 7.5px;
    //   left: 7.5px;
    //   content: "";
    //   position: absolute;
    //   background-color: rgba(color(purple), 0.25);
    //   box-shadow: 10px 15px 20px 0 rgba(color(gray), 0.15);
    //   pointer-events: none;
    //   z-index: 0;
    // }
  }

  .WindowButtons {
    position: absolute;
    top: 15px;
    left: 15px;
    width: 100px;
    display: flex;
    height: 10px;
  }
}

</style>
