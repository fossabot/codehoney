<template>
  <pre class="Code"><code ref="code" class="javascript" contenteditable tabindex="-1" v-html="beautify(content)"></code></pre>
</template>
<script>
let hljs = require('highlight.js');
let beautify = require('js-beautify');

export default {
  name: 'Code',
  props: {
    content: String,
  },
  methods: {
    beautify: function(code) {
      return beautify(code, { indent_size: 2, space_in_empty_paren: true });
    },
    highlight: function() {
      let code = this.$refs.code;
      // let content = this.getContent();
      hljs.highlightBlock(code);
    },
    // getContent: function() {
    //   let html = this.$refs.code.innerHTML.replace(/<[^>]*>/g, "");
    //   return html;
    // }
  },
  computed: {

  },
  created: function(argument) {

  },
  mounted: function() {
    this.highlight();
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../styles/code-highlighting';

.Code {
  outline: none;
  flex: 1;
  margin-bottom: 0;
  margin-top: 0;
  width: 100%;

  code {
    outline: none;
    height: 100%;
    width: 100%;
    // font-family: 'Space Mono', monospace;
    // font-family: 'Share Tech Mono', monospace;
    // font-family: 'Cutive Mono', monospace;
    font-family: 'Overpass Mono', monospace;
    font-weight: 700;
    font-size: 0.95rem;
  }
}

</style>
