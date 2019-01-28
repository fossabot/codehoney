<template>
  <pre class="Code"><code focus contenteditable v-html="code"></code><span class="LineNumbers"><span v-for="(line,i) of lines" :key="randomID(i)" class="LineNumber">{{i+1}}</span></span>
</pre>
</template>
<script>
import Prism from 'prismjs';
import prismtheme from 'prismjs/themes/prism-tomorrow.css';

let beautify = require('js-beautify');
let uniqid = require('uniqid');

export default {
  name: 'Code',
  props: {
    content: String,
  },
  data: () => ({
    code: "",
    lines: 0
  }),
  watch: {
    content: {
      immediate: true,
      handler(content) {
        let code = this.beautify(content);
        let html = this.highlight(code);
        this.code = html;
        this.lineNumbers();
      }
    }
  },
  methods: {
    beautify: function(code) {
      return beautify(code, { indent_size: 4, space_in_empty_paren: true });
    },
    highlight: function(code) {
      return Prism.highlight(code, Prism.languages.javascript, 'javascript');
    },
    lineNumbers: function() {
      setTimeout(() => {
        let code = document.querySelector('.Code code');
        let codeHeight = code ? code.offsetHeight : 400;
        let lines = (codeHeight / 24).toFixed(0);
        this.lines = Array(Number(lines)).fill(0);
      }, 1);
    },
    randomID: function(i) {
      return uniqid(i);
    }
  },
  computed: {},
  created: function() {},
  mounted: function() {}
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
  background-color: transparent !important;
  position: relative;

  code {
    background-color: transparent;
    outline: none;
    // font-family: 'Space Mono', monospace;
    // font-family: 'Share Tech Mono', monospace;
    // font-family: 'Cutive Mono', monospace;
    font-family: monospace;
  }

  .LineNumbers {
    height: 100%;
    position: absolute;
    opacity: 0.15;
    left: -40px;
    top: 0;
    width: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    user-select: none;
  }

  .LineNumber {
    display: block;
  }
}

</style>
