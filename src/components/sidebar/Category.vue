<template>
    <div class="Category" :class="{'is-selected':iAmSelected}" @click="toggleClass">
        <span class="Name">{{item.name}}</span>
        <span class="Counter">{{item.count}}</span>
    </div>
</template>
<script>
export default {
    name: 'Category',
    props: {
        item: Object,
        isSelected: Number,
    },
    methods: {
        toggleClass(el) {
            // this.$emit('selected', this.item.id);
        },
    },
    computed: {
        iAmSelected() {
            return this.isSelected === this.item.id;
        }
    },
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Category {
    padding: 8px 0;
    transition: all .295s $ease;
    cursor: pointer;
    padding-left: $appDistanceLeft;
    padding-right: 30px;
    user-select: none;
    position: relative;
    color: rgba(color(purple), 0.5);
    display: flex;
    justify-content: space-between;
    align-items: center;

    &::before {
        display: block;
        position: absolute;
        content: "";
        height: 100%;
        width: 100%;
        background-color: color(orange);
        top: 0;
        left: 0;
        transition: all .295s $ease;
        transform: translateX(-100%) translateZ(0);
    }

    &:hover {
        color: rgba(color(purple), 1);

        &::before {
            transform: translateX(-95%) translateZ(0);
        }
    }

    &.is-selected {
        color: rgba(color(purple), 1);

        &::before {
            transform: translateX(-75%) translateZ(0);
        }
    }

    .Name {
        position: relative;
    }

    .Counter {
        transition: all .295s $ease;
        font-size: 0.85rem;
        position: relative;
    }
}

</style>
