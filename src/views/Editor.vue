<template>
  <div class="Editor">
    <Headline :title="snippet.name" :description="snippet.description" />
    <Tags :tags="snippet.tags" />
    <Code :content="snippet.code"/>
  </div>
</template>
<script>
import Headline from '../components/editor/Headline.vue';
import Code from '../components/editor/Code.vue';
import Tags from '../components/editor/Tags.vue';

export default {
  name: 'Editor',
  components:{
    Headline,
    Code,
    Tags
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
    overflow: auto;
    padding-left: 65px;
    padding-right: 100px;
    padding-bottom: 50px;

    &::-webkit-scrollbar {
      width: 5px;
      height: 4px;
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: color(light-purple);
      height: 4px;
      width: 4px;
    }
  }
</style>
