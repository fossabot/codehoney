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
            <span
                v-for="(line,i) of lines"
                :key="i"
                class="LineNumber"
                v-html="line"
            />
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Prism from 'prismjs';
import markup from 'prismjs/components/prism-markup-templating.js';
import clike from 'prismjs/components/prism-clike.js';

export default {
    name: 'Code',
    props: {
        code: String,
    },
    data: () => ({
        lines: 0,
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
        highlight(code) {
            let language = this.language.name.toLowerCase();;

            try {
                language !== 'html' && require(`prismjs/components/prism-${language}.js`);
                let mCode = Prism.highlight(code, Prism.languages[language], language)
                return mCode;
            } catch (e) {
                // console.log("Error: " + e);
                return code;
            }

        },
        lineNumbers() {
            const LINE_HEIGHT = 24;
            let code = this.$refs.code;
            let codeHeight = code ? code.offsetHeight : 400;
            let lines = codeHeight / LINE_HEIGHT > 0 ? (codeHeight / LINE_HEIGHT).toFixed(0) : 1;
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
    mounted: function() {
        // let textarea = this.$refs.textarea;
        // let code = this.$refs.code;
        // console.log(code)
        // textarea.setAttribute('style', `width:${code.getBoundingClientRect().width}px`);
    }
}

</script>
<style lang="scss">
@import '../../styles/code-highlighting';

.Code {
    outline: none;
    flex: 1;
    margin-bottom: 0;
    margin-top: 0;
    width: 95%;
    background-color: transparent !important;
    position: relative;
    margin-top: 15px;

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
        height: calc(100% + 1.5rem);
        margin: 0;
        font-size: 1rem;
        letter-spacing: 0.5px;
        line-height: 1.5em;
        padding: 0;
        z-index: 0;
        resize: none;
        caret-color: color(white);
        padding-right: 0px;
        white-space: pre-wrap;

    }

    code {
        background-color: transparent;
        outline: none;
        position: relative;
        pointer-events: none;
        font-family: monospace;
        white-space: pre-wrap;
        color: #ffd777;
        display: inline-block;
        // width: 100%;
        padding-right: 0px;
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
