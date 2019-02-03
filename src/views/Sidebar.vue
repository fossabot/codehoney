<template>
  <div class="Sidebar">
    <img class="Logo" src="@/assets/logo.svg">
    <Categories title="Languages" :categories="languages" @select="selectLanguage"/>
    <Categories title="Tags" :categories="tags" @select="selectTag"/>
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
  },
  components: {
    Categories,
  },
  data: () => ({}),
  methods: {
    ...mapActions([
      'selectLanguage',
      'selectTag' 
    ])
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

  .Logo {
    position: absolute;
    bottom: $appDistanceBottom * 1.5;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    width: 50%;
    user-select: none;
  }
}

</style>
