<template>
  <div class="Categories">
    <h3 class="Title">{{title}}</h3>
    <Category 
      v-for="(category,i) in categories" 
      :key="i" 
      :item="category" 
      @click="handleClick($event)" />
  </div>
</template>
<script>
import Category from './Category.vue';

export default {
  name: 'Categories',
  components: {
    Category,
  },
  data: () => ({}),
  props: {
    title: String,
    categories: Array,
  },
  methods: {
    handleClick(id) {
      this.$emit('select', id);
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
}

</style>
