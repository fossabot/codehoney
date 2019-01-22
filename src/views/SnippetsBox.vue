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
  props: {},
  data: () => ({
    snippets: [{
      id: 1,
      name: 'NumWays(n,steps)',
      description: "returns the numbers of possible ways to go the stairs up for a given set of steps"
    }, {
      id: 2,
      name: 'longestItem(Array)',
      description: "return the longest item in an Array"
    }, {
      id: 3,
      name: 'NumWays(n,steps)',
      description: "returns the numbers of possible ways to go the stairs up for a given set of steps"
    }, {
      id: 4,
      name: 'longestItem(Array)',
      description: "return the longest item in an Array"
    }, {
      id: 5,
      name: 'NumWays(n,steps)',
      description: "returns the numbers of possible ways to go the stairs up for a given set of steps"
    }, {
      id: 6,
      name: 'longestItem(Array)',
      description: "return the longest item in an Array"
    }, {
      id: 7,
      name: 'NumWays(n,steps)',
      description: "returns the numbers of possible ways to go the stairs up for a given set of steps"
    }, {
      id: 8,
      name: 'longestItem(Array)',
      description: "return the longest item in an Array"
    }, {
      id: 9,
      name: 'NumWays(n,steps)',
      description: "returns the numbers of possible ways to go the stairs up for a given set of steps"
    }, {
      id: 10,
      name: 'longestItem(Array)',
      description: "return the longest item in an Array"
    }, {
      id: 11,
      name: 'NumWays(n,steps)',
      description: "returns the numbers of possible ways to go the stairs up for a given set of steps"
    }, {
      id: 12,
      name: 'longestItem(Array)',
      description: "return the longest item in an Array"
    }, ],
  }),
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
