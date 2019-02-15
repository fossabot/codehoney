<template>
    <div
        class="Icon"
        :class="{'is-disabled':disabled}"
        @click="click"
        @mouseover="mouseover"
        @mouseleave="mouseleave"
    >
        <span v-html="require(`!raw-loader!../assets/icon/icon-${this.icon}.svg`)"></span>
        <span class="Hint" :style="{'color':disabled ? fillDisabled:fill}">{{mName}}</span>
    </div>
</template>
<script>
const anime = require('animejs/lib/anime.js');

export default {
    name: 'BaseIcon',
    props: {
        icon: String,
        fill: String,
        hint: String,
        name: String,
        morphTo: String,
        disabled: Boolean
    },
    data: () => ({
        svg: null,
        mName: '',
        isHovering: false,
        fillDisabled: 'rgba(255,255,255,0.15)'
    }),
    methods: {
        click(el) {
            this.mName = this.hint;

            setTimeout(() => {
                let mEl = el.target;
                while (mEl && mEl.parentElement && !mEl.classList.value.includes('Icon')) {
                    mEl = mEl.parentElement;
                }
                if (!mEl.classList.value.includes('Icon')) {
                    this.mouseleave(el);
                }
            }, 1000);
            this.$emit('click', el);
        },
        mouseover(el) {
            this.$el.classList.add('is-hovering');
            this.isHovering = true;

            if (this.morphTo) {
                let icon = require(`!raw-loader!../assets/icon/icon-${this.morphTo}.svg`);
                let paths = this.path(icon);
                let targets = [...this.svg.querySelectorAll('path')];
                this.animate(targets, paths);
            }
        },

        mouseleave(el) {
            this.$el.classList.remove('is-hovering');
            let icon = require(`!raw-loader!../assets/icon/icon-${this.icon}.svg`);
            let paths = this.path(icon);
            let targets = [...this.svg.querySelectorAll('path')];
            this.animate(targets, paths);

            setTimeout(() => {
                this.mName = this.name;
            }, 100);
        },
        path(icon) {
            let svg = document.createElement('div');
            svg.innerHTML = icon.trim();
            return [...svg.querySelectorAll('path')].map((p) => {
                return {
                    d: p.getAttribute('d'),
                    transform: p.getAttribute('transform')
                }
            });
        },
        animate(targets, paths) {
            for (let i = 0; i < paths.length; i++) {
                paths[i].d && anime({
                    targets: targets[i],
                    d: paths[i].d,
                    duration: 150,
                    easing: 'cubicBezier(.5, .05, .1, .3)',
                });
                paths[i].transform && anime({
                    targets: targets[i],
                    transform: paths[i].transform,
                    duration: 150,
                    easing: 'cubicBezier(.5, .05, .1, .3)',
                });
            }
        },
    },
    updated: function() {
        this.svg.removeAttribute('height');
        this.svg.removeAttribute('width');
        this.svg.setAttribute('color', this.disabled ? this.fillDisabled : this.fill);
        this.svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    },
    mounted: function() {
        this.svg = this.$el.querySelector('svg');
        this.svg.removeAttribute('height');
        this.svg.removeAttribute('width');
        this.svg.setAttribute('color', this.disabled ? this.fillDisabled : this.fill);
        this.svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        this.mName = this.name;
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

    &.is-disabled{
      pointer-events: none;

      svg {
        path[fill="#fff"],
        path[fill="#FFF"],
        g[fill="#FFF"],
        g[fill="#fff"],{
            fill: color(disabled) !important;
        }

        path[stroke="#fff"],
        path[stroke="#FFF"],
        g[stroke="#FFF"],
        g[stroke="#fff"]{
            stroke: color(disabled) !important;
        }
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
        padding: 8px;
        box-sizing: content-box;
        vertical-align: middle;
        transition: all .15s $ease;
        fill: currentColor !important;
        stroke: currentColor !important;
        width: 1.125rem;
        height: 1.125rem;
        display: flex;
        justify-content: center;
        align-items: center;

        path[fill="#fff"],
        path[fill="#FFF"],
        g[fill="#FFF"],
        g[fill="#fff"],{
            fill: currentColor !important;
        }

        path[stroke="#fff"],
        path[stroke="#FFF"],
        g[stroke="#FFF"],
        g[stroke="#fff"]{
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
        text-align: center;
    }
}

</style>
