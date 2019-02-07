<template>
  <div class="Editor" v-if="Object.keys(snippet).length">
    <Headline :title="snippet.name" :description="snippet.description" />
    <Tags :tags="snippet.tags" />
    <Toolbar @copy="handleCopy" @beautify="handlebeautify" @remove="handleRemove" />
    <Code :content="snippet.code" @update="handleTextchange"/>
  </div>
</template>
<script>
import Headline from '../components/editor/Headline.vue';
import Code from '../components/editor/Code.vue';
import Tags from '../components/editor/Tags.vue';
import Toolbar from '../components/editor/Toolbar.vue';
import { mapActions } from 'vuex'
const beautify = require('js-beautify');

export default {
  name: 'Editor',
  components:{
    Headline,
    Code,
    Tags,
    Toolbar
  },
  props: {
    snippet: Object
  },    
  methods: {
    handleCopy(){
      navigator.clipboard.writeText(this.beautify(this.snippet.code));
    },
    handlebeautify(){
      this.snippet.code = this.beautify(this.snippet.code);
    },
    handleRemove() {
      console.log('handleRemove');
      this.removeSnippet(this.snippet.id);
    },
    handleTextchange(code){
      // this.updateSnippetCode(this.snippet.id,code);
    },
    beautify(code) {
      let options = { 
        indent_size: 4, 
        end_with_newline  : true,
        wrap_line_length: 100,
      };
      return beautify(code, options);
    },
    ...mapActions([
        'removeSnippet',
      ]),
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
