<template>
  <div
    class="Icon"
    @click="click"
    @mouseover="mouseover"
    @mouseleave="mouseleave"
  >
    <span v-html="require(`!raw-loader!../assets/icon/icon-${this.icon}.svg`)"></span>
    <span class="Hint" :style="{'color':fill}">{{mName}}</span>
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
    morphTo: String
  },
  data: () => ({
    svg: null,
    mName: '',
    clicked: false
  }),
  methods: {
    click(el) {
      this.mName = this.hint;
      this.clicked = true;

      setTimeout(() => {
        this.clicked = false;
        this.mouseleave(el);
        setTimeout(() => { this.mName = this.name; }, 300);
      }, 1000);
      this.$emit('click');
    },
    mouseover(el) {
      this.$el.classList.add('is-hovering');

      if (this.morphTo) {
        let icon = require(`!raw-loader!../assets/icon/icon-${this.morphTo}.svg`);
        let paths = this.path(icon);
        let targets = [...this.svg.querySelectorAll('path')];
        this.animate(targets, paths);
      }
    },
    mouseleave(el) {
      if (this.clicked) return

      this.$el.classList.remove('is-hovering');
      let icon = require(`!raw-loader!../assets/icon/icon-${this.icon}.svg`);
      let paths = this.path(icon);
      let targets = [...this.svg.querySelectorAll('path')];
      this.animate(targets, paths);
    },
    path(icon) {
      let svg = document.createElement('div');
      svg.innerHTML = icon.trim();
      return [...svg.querySelectorAll('path')].map((d) => d.getAttribute('d'));
    },
    animate(targets, paths) {
      for (let i = 0; i < paths.length; i++) {
        anime({
          targets: targets[i],
          d: paths[i],
          duration: 150,
          easing: 'cubicBezier(.5, .05, .1, .3)',
        });
      }

    },
  },
  updated: function() {
    this.svg.removeAttribute('height');
    this.svg.removeAttribute('width');
    this.svg.setAttribute('color', this.fill);
    this.svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
  },
  mounted: function() {
    this.svg = this.$el.querySelector('svg');
    this.svg.removeAttribute('height');
    this.svg.removeAttribute('width');
    this.svg.setAttribute('color', this.fill);
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
        width: 1.25rem;
        height: 1.25rem;
        display: flex;
        justify-content: center;
        align-items: center;

        path[fill="#fff"],
        g[fill="#FFF"]{
            fill: currentColor !important;
        }

        path[stroke="#fff"],
        g[stroke="#FFF"]{
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
