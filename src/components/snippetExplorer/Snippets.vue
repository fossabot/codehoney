<template>
  <transition-group
    class="Snippets"
    name="list"
    tag="div"
  >
    <Snippet
      v-for="snippet in snippets"
      :key="snippet.id"
      :item="snippet"
      @click="handleClick($event)"
    />
  </transition-group>
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
    handleClick(id) {
      this.$emit('select', id);
    },
  },
  mounted: function() {},
};

</script>
<style scoped lang="scss">
.Snippets {
    position: relative;
    overflow: auto;
    overflow-x: hidden;
    height: calc(100% - 90px);
    width: calc(100% - 3px);
    padding-bottom: 50px;

    .Title {
        font-weight: bold;
        font-size: 1.25rem;
        margin-bottom: 35px;
        margin-top: 0;
        padding-left: $appDistanceLeft;
        user-select: none;
    }

    .list-enter-active {
        transition: all .3s $ease;
    }

    .list-leave-active {
        height: 96px;
        transition: all .4s $ease, background-color .2s $ease, height .3s .2s $ease, padding .3s .2s $ease;
    }

    .list-enter {
        transform: translateX(-20px);
        padding: 0;
    }

    .list-leave-to {
        transform: translateY(-110%);
        border-color: transparent;
        height: 0;
        padding: 0;
        border: none;
        overflow: hidden;
        background-color: color(red);
    }
}

</style>
