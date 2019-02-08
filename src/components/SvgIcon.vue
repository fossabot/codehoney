<template>
    <div class="Icon" @click="$emit('click')" @mouseover="mouseover" @mouseleave="mouseleave">
        <span v-html="require(`!raw-loader!../assets/icon-${this.icon}.svg`)"></span>
        <span class="Hint" :style="{'color':fill}">{{hint || icon}}</span>
    </div>
</template>
<script>
const anime = require('animejs/lib/anime.js');

export default {
    name: 'SvgIcon',
    props: {
        icon: String,
        fill: String,
        hint: String,
        morphTo: String
    },
    data: () => ({ svg: null }),
    methods: {
        mouseover(el) {
            this.$el.classList.add('is-hovering');

            if (this.morphTo) {
                let icon = require(`!raw-loader!../assets/icon-${this.morphTo}.svg`);
                let svg = document.createElement('div');
                svg.innerHTML = icon.trim();
                let paths = [...svg.querySelectorAll('path')].map((d) => d.getAttribute('d'));
                let targets = [...this.svg.querySelectorAll('path')]

                for (let i = 0; i < paths.length; i++) {
                    this.animate(targets[i], paths[i]);
                }
            }
        },
        animate(target, path) {
            console.log(path);
            anime({
                targets: target,
                d: path,
                duration: 150,
                easing: 'cubicBezier(.5, .05, .1, .3)',
                complete: function() {

                }
            });
        },
        mouseleave(el) {
            this.$el.classList.remove('is-hovering');

            let icon = require(`!raw-loader!../assets/icon-${this.icon}.svg`);
            let svg = document.createElement('div');
            svg.innerHTML = icon.trim();
            let paths = [...svg.querySelectorAll('path')].map((d) => d.getAttribute('d'));
            let targets = [...this.svg.querySelectorAll('path')]

            for (let i = 0; i < paths.length; i++) {
                this.animate(targets[i], paths[i]);
            }
        }
    },
    mounted() {
        this.svg = this.$el.querySelector('svg');
        this.svg.removeAttribute('height');
        this.svg.removeAttribute('width');
        this.svg.setAttribute('color', this.fill);
        this.svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    }
}

</script>
<style lang="scss">
.Icon {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    overflow: visible;

    &.is-hovering {
        .Hint {
            transform: translateY(10px);
            opacity: 1;
        }
    }

    >span {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: visible;
    }

    svg {
        display: block;
        fill: currentColor;
        padding: 5px;
        box-sizing: content-box;
        vertical-align: middle;
        transition: all .15s $ease;
        fill: currentColor !important;
        stroke: currentColor !important;
        width: 1rem;
        height: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;

        &[fill="#fff"],
        &[stroke="#fff"] {
            fill: currentColor !important;
            stroke: currentColor !important;
        }

        path[fill="#fff"],
        path[stroke="#fff"],
        g[fill="#FFF"],
        g[stroke="#FFF"] {
            fill: currentColor !important;
            stroke: currentColor !important;
        }
    }

    .Hint {
        font-size: 0.75rem;
        position: absolute;
        bottom: 0;
        height: 0.75rem;
        display: block;
        line-height: 1;
        pointer-events: none;
        user-select: none;
        opacity: 0;
        transition: all .2s $ease;
        color: inherit;
    }
}

</style>
