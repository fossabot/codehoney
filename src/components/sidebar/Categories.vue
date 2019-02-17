<template>
    <div class="Categories">
        <h3 class="Title">{{title}}</h3>
        <Category
            v-for="category in categories"
            :key="category.id"
            :item="category"
            @click="handleCategoryClick"
            @click-right="handleCategoryRightClick"
        />
        <CategoryAddButton
            v-if="hasAddButton"
            @add="handleCategoryAdd"
        />
    </div>
</template>
<script>
import Category from './Category.vue';
import CategoryAddButton from './CategoryAddButton.vue';

export default {
    name: 'Categories',
    components: {
        Category,
        CategoryAddButton
    },
    data: () => ({}),
    props: {
        title: String,
        categories: Array,
        hasAddButton: Boolean
    },
    methods: {
        handleCategoryClick(id) {
            this.$emit('select', id);
        },
        handleCategoryRightClick(id){
            this.$emit('context-menu', id);
        },
        handleCategoryAdd(language) {
            this.$emit('add', language)
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
