<template>
    <div class="BaseContextMenu" :class='{"is-visible":isVisible}'>
        <div class="Item" v-for="(item, i) in items" :key="i" @click="click(item.cb)">{{item.name}}</div>
    </div>
</template>
<script>
export default {
    name: 'BaseContextMenu',
    props: {
        visible: Boolean,
        items: Array,
        top: Number,
        left: Number
    },
    watch:{
        visible: function (visible) {
            let el = this.$el;
            if(!visible) { return }

            el.style.setProperty('--baseContextMenuTop', this.top + 'px');
            el.style.setProperty('--baseContextMenuLeft', this.left + 'px');
            el.style.setProperty('--baseContextMenuHeight', el.scrollHeight + 'px');
        }
    },
    computed:{
      isVisible:{
        get() {
          return this.visible;
        },
        set(value) {
          return value;
        }
      }
    },
    methods:{
      click(cb){
        this.$emit('click', cb);
        this.$el.style.setProperty('--baseContextMenuHeight', 0 + 'px');
      }
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.BaseContextMenu {
  --baseContextMenuHeight: 0px;
  --baseContextMenuTop: 0px;
  --baseContextMenuLeft: 0px;

  position: fixed;
  z-index: zIndex(contextMenu);
  transition: all .395s $ease;
  width: 0;
  top: var(--baseContextMenuTop);
  left: var(--baseContextMenuLeft);
  max-height: var(--baseContextMenuHeight);
  visibility: hidden;
  background-color: color(white);
  box-shadow: 2px 2px 20px 0px rgba(black, 0.15);
  overflow: hidden;

  &.is-visible {
      visibility: visible;
      width: 200px;
      transition: all .195s $ease, top 0s, left 0s;

      .Item {
        transition: all .255s .2s $ease, background .3s $ease;
        opacity: 1;
      }
  }

  .Item {
    font-size: 0.85rem;
    padding: 8px 15px;
    transition: all .4s .1s $ease;
    color: color(theme-dark);
    cursor: pointer;
    opacity: 0;
    user-select: none;

    &:hover {
      background-color: color(orange);
    }
  }
}

</style>
