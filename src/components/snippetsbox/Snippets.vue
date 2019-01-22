<template>
  <div class="Snippets">
    <Snippet v-for="(snippet,i) in snippets" :key="i" :item="snippet" :isSelected="selectedItem || 1" @selected="handleSelected($event)" />
  </div>
</template>
<script>
import Snippet from './Snippet.vue';

export default {
  name: 'Snippets',
  components: {
    Snippet,
  },
  props: {
    title: String,
    snippets: Array,
  },
  data: () => ({
    selectedItem: null,
  }),

  methods: {
    handleSelected(id) {
      this.selectedItem = id;
    },
  },
  mounted: function() {},
};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Snippets {
  position: relative;
  overflow: auto;
  height: calc(100% - 90px);

  .Title {
    font-weight: bold;
    font-size: 1.25rem;
    margin-bottom: 35px;
    margin-top: 0;
    padding-left: $appDistanceLeft;
    user-select: none;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}

</style>
