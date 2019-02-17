<template>
    <div class="Categories">
        <h3 class="Title">{{title}}</h3>
        <transition-group
            name="list"
            tag="div"
        >
            <Category
                v-for="category in categories"
                :key="category.id"
                :item="category"
                @click="handleCategoryClick"
                @click-right="handleCategoryRightClick"
                @edited="handleEdit"
            />
        </transition-group>

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
        handleCategoryRightClick(id) {
            this.$emit('context-menu', id);
        },
        handleCategoryAdd(language) {
            this.$emit('add', language)
        },
        handleEdit(language) {
            console.log(language)
            this.$emit('update', language)
        }
    },
};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
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

    .list-enter-active {
        transition: all .4s $ease;
    }

    .list-leave-active {
        will-change: auto;
        transition: all .4s $ease;
    }

    .list-enter {
        transform: translateX(-50%) translateZ(0);
    }

    .list-leave-to {
        transform: translateX(-110%) translateZ(0);
        border-color: transparent;
        opacity: 0;
        overflow: hidden;
        // background-color: color(red);
    }
}

</style>
