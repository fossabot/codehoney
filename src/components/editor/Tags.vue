<template>
  <div class="Tags">
    <Tag v-for="(tag,i) in tags" :key="i" :name="tag" />
    <label class="Label" v-if="tags">tags</label>
    <div class="Add" :class="{'is-active':addTag}" @click="addTag=!addTag">
      <svg viewBox="0 0 40 40">
        <g fill="none" fill-rule="evenodd" stroke="#FFF" stroke-width="2">
          <polyline class="Add-top" points="19.9 .995 19.9 20.075 39.818 20.075" />
          <polyline class="Add-bottom" points="0 20 0 39.08 19.918 39.08" transform="rotate(180 9.959 29.54)" />
        </g>
      </svg>
      <input type="" name="">
    </div>
  </div>
</template>
<script>
import Tag from './Tag.vue';
let iconPlus = require('../../assets/icon-plus-expand.svg');
export default {
  name: 'Tags',
  components: {
    Tag
  },
  props: {
    tags: Array,
  },
  data: () => ({
    addTag: false,
  })
}

</script>
<style scoped lang="scss">
.Tags {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  position: relative;
  align-items: center;

  .Add {
    margin-left: 10px;
    overflow: visible;
    cursor: pointer;
    position: relative;

    svg {
      width: 15px;
      height: 15px;
      overflow: visible;

    }

    .Add-bottom,
    .Add-top {
      transition: all .195s $ease
    }


    &.is-active {
      .Add-bottom {
        transform: translate(150px, 1rem) scale(-1);
      }

      .Add-top {
        transform: translate(-50px, 2rem);
      }
    }

    input {
      padding: 9px 15px;
      font-size: 0.85rem;
      border: none;
      background-color: transparent;
      font-family: font(regular);
      line-height: 1;
      color: color(white);
      position: absolute;
      left: 0;
      outline: none;
    }
  }

  .Label {
    position: absolute;
    left: 0;
    transform: translateX(calc(-100% - 15px));
    bottom: 0;
    font-size: 0.85rem;
    color: rgba(color(white), 0.25)
  }
}

</style>
