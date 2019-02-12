<template>
  <div class="Tags">
    <Tag
      v-for="(tag,i) in tags"
      :key="i"
      :name="tag"
    />
    <label
      class="Label"
      v-if="tags"
      v-text="'tags'"
    />
  </div>
</template>
<script>
import Tag from './Tag.vue';

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
  min-height: 1rem;
  
  .Label {
    position: absolute;
    left: 0;
    transform: translateX(calc(-100% - 15px));
    bottom: 0;
    font-size: 0.85rem;
    color: rgba(color(white), 0.25);
    user-select: none;
  }
}

</style>
