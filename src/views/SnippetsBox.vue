<template>
  <div class="SnippetsBox">
    <Search />
    <Snippets :snippets="snippets" />
  </div>
</template>
<script>
import Search from '../components/snippetsbox/Search.vue';
import Snippets from '../components/snippetsbox/Snippets.vue';

export default {
  name: 'SnippetsBox',
  components: {
    Search,
    Snippets,
  },
  props: {
    snippets: Array,
  },
  data: () => ({}),
  mounted: function() {

  }
};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.SnippetsBox {
  width: 25%;
  min-width: 235px;
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
}

</style>
