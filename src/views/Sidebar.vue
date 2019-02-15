<template>
  <div
    class="Sidebar"
    :class="{'is-hidden':isHidden}"
  >
    <Icon
      @click="settings"
      icon="settings"
      name="settings"
      morphTo="settings-2"
      class="Icon--settings"
      fill="var(--color-theme)"
    />
    <Categories
      title="Languages"
      :categories="languages"
      @select="selectLanguage"
    />
    <Categories
      title="Tags"
      :categories="tags"
      @select="selectTag"
    />
    <img
      svg-inline
      class="Logo"
      src="@/assets/logo.svg"
    >
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import Categories from '../components/sidebar/Categories.vue';

export default {
  name: 'Sidebar',
  props: {
    languages: Array,
    tags: Array,
    isHidden: Boolean,
  },
  components: {
    Categories,
  },
  data: () => ({}),
  methods: {
    ...mapActions([
      'selectLanguage',
      'selectTag'
    ]),
    settings(){

    }
  }
};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Sidebar {
  width: 16%;
  min-width: 225px;
  max-width: 285px;
  padding-top: $appDistanceTop;
  position: relative;
  transition: all .35s $ease;
  transform: translateZ(0);
  will-change: width;

  &.is-hidden {
    width: 0;
    min-width: 0;
  }

  .Logo {
    position: absolute;
    bottom: $appDistanceBottom * 1.35;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    width: 50%;
    user-select: none;
  }

  .Icon--settings{
    position: absolute;
    right: 20px;
    top: 52px;
    cursor: pointer;
    z-index: zIndex(default);
  }
}

</style>
