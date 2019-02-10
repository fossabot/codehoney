<template>
  <div class="SnippetExplorer">
    <Search v-if="snippets"/>
    <Snippets :snippets="snippets" @select="selectSnippet" />
    <Button round icon><img svg-inline src="@/assets/icon/icon-plus.svg" @click="handleClick"></Button>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import Button from '../components/Button.vue';
import Search from '../components/snippetExplorer/Search.vue';
import Snippets from '../components/snippetExplorer/Snippets.vue';
import uniqid from 'uniqid';

export default {
  name: 'SnippetExplorer',
  components: {
    Button,
    Search,
    Snippets,
  },
  props: {
    snippets: Array,
  },
  data: () => ({}),
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

  .Button {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    z-index: zIndex(default) + 10;
  }
}

</style>
