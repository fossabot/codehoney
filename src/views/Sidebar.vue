<template>
  <div class="Sidebar">
    <img class="Logo" src="../assets/logo.svg">
    <Categories title="Languages" :categories="languages" selectFirstItem />
    <Categories title="Tags" :categories="tags" />
  </div>
</template>
<script>
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

  // &::before {
  //     display: block;
  //     position: absolute;
  //     content: "";
  //     height: 100%;
  //     width: 4px;
  //     background-color: color(orange);
  //     top: 0;
  //     right: 0;
  //     transition: all .195s ease-out;
  // }

  .Logo {
    position: absolute;
    bottom: $appDistanceBottom * 2;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    width: 50%;
    user-select: none;
  }
}

</style>
