<template>
  <div class="Sidebar">
    <img class="Logo" src="../assets/logo.svg">
    <Categories title="Languages" :categories="categories" selectFirstItem/>
    <Categories title="Tags" :categories="tags" />
  </div>
</template>
<script>
import Categories from '../components/sidebar/Categories.vue';

export default {
  name: 'Sidebar',
  props: {
    msg: String,
  },
  components: {
    Categories,
  },
  data: () => ({
    categories: [{
        'name': 'Javascript',
        'id': 1,
        count: 35
      },
      {
        'name': 'SCSS',
        'id': 2,
        count: 17

      },
      {
        'name': 'HTML',
        'id': 3,
        count: 3

      }
    ],
    tags: [{
        'name': 'Array',
        'id': 1,
        count: 4
      },
      {
        'name': 'List',
        'id': 2,
        count: 2

      },
    ],
  }),
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
