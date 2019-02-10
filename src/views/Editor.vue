<template>
  <div class="Editor" v-if="Object.keys(snippet).length">
    <Headline 
      :title="snippet.name" 
      :description="snippet.description" 
      @updateTitle="handleTitleChange"
      @updateDescription="handleDescriptionChange"  
      />

    <Tags :tags="snippet.tags" />

    <Toolbar 
      @copy="handleCopy" 
      @beautify="handleBeautify"
      @expand="handleExpand" 
      @remove="handleRemove" />
    <Code :content="snippet.code" @update="handleCodeChange"/>
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
  data: () => ({}),
  methods: {
    handleCopy(){
      navigator.clipboard.writeText(this.beautify(this.snippet.code));
    },
    handleBeautify(){
      this.snippet.code = this.beautify(this.snippet.code);
    },
    handleExpand(){
      this.$emit('expand');
    },
    handleRemove() {
      this.removeSnippet(this.snippet.id);
    },
    handleTitleChange(title){
      console.log(title)
      this.updateSnippet({id:this.snippet.id, name:title});
    },
    handleDescriptionChange(description){
      this.updateSnippet({id:this.snippet.id, description});
    },
    handleCodeChange(code){
      this.updateSnippet({id:this.snippet.id, code});
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
        'updateSnippet'
      ]),
    },
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

  }
</style>
