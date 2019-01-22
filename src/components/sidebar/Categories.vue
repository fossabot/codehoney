<template>
  <div class="Categories">
    <h3 class="Title">{{title}}</h3>
    <ul>
      <li v-for="(category,i) in categories" :key="i">
        <Category :item="category" :isSelected="selectedItem || Number(selectFirstItem)" @selected="handleSelected($event)" />
      </li>
    </ul>
  </div>
</template>
<script>
import Category from './Category.vue';

export default {
  name: 'Categories',
  components: {
    Category,
  },
  data: () => ({
    selectedItem: null,
  }),
  props: {
    title: String,
    categories: Array,
    selectFirstItem: Boolean,

  },
  methods: {
    handleSelected(id) {
      this.selectedItem = id;
    }
  },
};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Categories {
    margin-bottom: 90px;
    position: relative;

    .Title {
        font-weight: bold;
        font-size: 1.25rem;
        margin-bottom: 35px;
        margin-top: 0;
        padding-left: $appDistanceLeft;
        user-select: none;
        color: rgba(color(black), 1);
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;

        li {
        }
    }

}

</style>
