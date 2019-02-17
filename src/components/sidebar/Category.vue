<template>
    <div
        class="Category"
        :class="[{'is-selected':item.isSelected},{'is-in-editmode':item.isInEditMode}]"
        @click.left="click"
        @click.right="clickRight"
    >
        <input
            class="Name"
            :readonly="!item.isInEditMode"
            @keyup.enter="handleEnterPress"
            v-model="item.name"
            :ref="item.id"
        />
        <span class="Counter">{{item.counter ? item.counter : 0}}</span>
    </div>
</template>
<script>
export default {
    name: 'Category',
    props: {
        item: Object,
    },
    methods: {
        click(el) {
            this.$emit('click', this.item.id);
        },
        clickRight(el) {
            el.preventDefault()
            this.$emit('click-right', { event: el, id: this.item.id });
        },
        handleEnterPress() {
            this.$emit('edited', { id: this.item.id, name: this.item.name });
            setTimeout(() => { this.$refs[this.item.id].focus(); }, 50);
        },
    },
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.Category {
    padding: 8px 0;
    transition: all .295s $ease;
    cursor: pointer;
    padding-left: $appDistanceLeft;
    padding-right: 30px;
    user-select: none;
    position: relative;
    color: var(--color-theme-dark);
    opacity: 0.5;
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
        opacity: 1;

        .Name {
            color: rgba(color(black), 1);
        }

        &::before {
            transform: translateX(-95%) translateZ(0);
        }
    }

    &.is-selected {
        opacity: 1;

        .Name {
            color: rgba(color(black), 1);
        }

        &::before {
            transform: translateX(-75%) translateZ(0);
        }
    }

    &.is-in-editmode {
        opacity: 1;

        &::before {
            transform: translateX(-8%) translateZ(0);
        }
    }

    .Name {
        position: relative;
        font-size: 1rem;
        color: rgba(color(black), 1);
        cursor: pointer;
    }

    .Counter {
        transition: all .295s $ease;
        font-size: 0.85rem;
        position: relative;
    }
}

</style>
