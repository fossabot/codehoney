<template>
  <div class="Editor">
    <Headline :title="snippet.name" :description="snippet.description" />
    <Code :content="snippet.code"/>
  </div>
</template>
<script>
import Headline from '../components/editor/Headline.vue';
import Code from '../components/editor/Code.vue';

export default {
  name: 'Editor',
  components:{
    Headline,
    Code,
  },
  props: {
    snippet: {
      name: '',
      description: '',
      code: ''
    }
  },
   data: () => ({}),
   created: function (argument) {}
};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Editor {
    min-width: 575px;
    position: relative;
    z-index: 1;
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding-left: 65px;
    overflow: auto;
    padding-right: 65px;
    padding-bottom: 50px;

    &::-webkit-scrollbar {
      width: 5px;
      height: 4px;
      background-color: transparent;
      /* or add it to the track */
    }

    /* optional: show position indicator in red */
    &::-webkit-scrollbar-thumb {
      background: color(light-purple);
      height: 4px;
      width: 4px;
    }
  }
</style>
