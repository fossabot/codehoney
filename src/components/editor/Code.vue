<template>
  <div class="Code">
    <textarea
      class="Textarea"
      focus
      ref="textarea"
      @keydown="handleKeycode"
      v-model="mCode"
    ></textarea>
    <pre><code ref="code" v-html="highlight(mCode)"></code></pre>
    <div class="LineNumbers">
      <span v-for="(line,i) of lines" :key="i" class="LineNumber">{{line}}</span>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
const Prism = require('prismjs');
let beautify = require('js-beautify');

export default {
  name: 'Code',
  props: {
    code: String,
  },
  data: () => ({
    lines: 0
  }),
  watch: {
    code: {
      immediate: true,
      handler: function(val) {
        setTimeout(() => { this.lineNumbers(); }, 50);
      }
    }
  },
  methods: {
    beautify(code) {
      let options = {
        indent_size: 4,
        wrap_line_length: 100,
      };
      return beautify(code, options);
    },
    highlight(code) {
      let language = this.language.name.toLowerCase();
      language !== 'html' && require(`prismjs/components/prism-${language}.js`);
      return Prism.highlight(code, Prism.languages[language], language);
    },
    lineNumbers() {
      let code = this.$refs.code;
      let codeHeight = code ? code.offsetHeight : 400;
      let lines = codeHeight / 24 > 0 ? (codeHeight / 24).toFixed(0) : 1;
      this.lines = [...Array(Number(lines)).keys()].map(x => x + 1);
    },
    setCaretPosition(pos) {
      let textarea = this.$refs.textarea;
      textarea.selectionStart = textarea.selectionEnd = pos;
    },
    handleKeycode(e) {
      let keyCode = e.keyCode || e.which;
      let textarea = this.$refs.textarea;
      const TAB = "    ";
      const KEYCODE_TAB = 9;

      if (keyCode === KEYCODE_TAB) {
        e.preventDefault();
        let start = textarea.selectionStart;
        let end = textarea.selectionEnd;
        this.mCode = textarea.value.substring(0, start) + TAB + textarea.value.substring(end);
        setTimeout(() => { this.setCaretPosition(start + TAB.length); }, 5);
      }
    }
  },
  computed: { ...mapGetters({
      language: 'activeLanguage',
    }),
    mCode: {
      get() {
        return this.code;
      },
      set(value) {
        this.$emit('update', value);
      }
    }
  },
}

</script>
<style scoped lang="scss">
@import '../../styles/code-highlighting';

.Code {
  outline: none;
  flex: 1;
  margin-bottom: 0;
  margin-top: 0;
  width: 95%;
  background-color: transparent !important;
  position: relative;
  margin-top: 32px;
  height: 100%;

  pre {
    margin-bottom: 0;
    margin-top: 0;

  }

  .Textarea {
    background-color: transparent;
    border: none;
    outline: none;
    font-family: monospace;
    font-size: 1rem;
    color: transparent;
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    font-size: 1rem;
    letter-spacing: 0.5px;
    line-height: 1.5em;
    padding: 0;
    z-index: 0;
    resize: none;
    caret-color: color(white);

  }

  code {
    background-color: transparent;
    outline: none;
    position: relative;
    pointer-events: none;
    font-family: monospace;
    white-space: pre-wrap;
    color: #ffd777;
  }

  .LineNumbers {
    height: 100%;
    position: absolute;
    opacity: 0.25;
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
