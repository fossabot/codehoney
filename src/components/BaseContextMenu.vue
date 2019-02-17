<template>
    <div
        class="BaseContextMenu"
        :class='{"is-visible":isVisible}'
    >
        <div
            class="Item"
            v-for="(item, i) in items"
            :key="i"
            v-html="item.name"
            v-click-outside="close"
            @click="click({event:$event,cb:item.cb})"
        />
    </div>
</template>
<script>
import ClickOutside from 'vue-click-outside'

export default {
    name: 'BaseContextMenu',
    props: {
        visible: Boolean,
        items: Array,
        top: Number,
        left: Number
    },
    directives: {
        ClickOutside
    },
    data: (_this) => ({
        isVisible: _this.visible
    }),
    watch: {
        visible: function(visible) {
            let el = this.$el;
            el.style.setProperty('--baseContextMenuTop', this.top + 'px');
            el.style.setProperty('--baseContextMenuLeft', this.left + 'px');
            setTimeout(() => {
                el.style.setProperty('--baseContextMenuHeight', el.scrollHeight + 'px');
            }, 60);
            this.isVisible = visible;
        }
    },
    mounted: function() {},
    methods: {
        click({event, cb}) {
            this.$emit('click', cb);
            this.close();
        },
        close() {
            this.$el.style.setProperty('--baseContextMenuHeight', 0 + 'px');
            this.isVisible = false;
        }
    },
}

</script>
<style lang="scss">
.BaseContextMenu {
    --baseContextMenuHeight: 0px;
    --baseContextMenuTop: 150px;
    --baseContextMenuLeft: 25px;

    position: fixed;
    z-index: zIndex(contextMenu);
    visibility: hidden;
    width: 0;
    top: var(--baseContextMenuTop);
    left: var(--baseContextMenuLeft);
    max-height: var(--baseContextMenuHeight);
    transition: all .3s $ease, top .255s $ease, left .255s $ease;
    background-color: color(white);
    box-shadow: 2px 2px 20px 0px rgba(black, 0.15);
    overflow: hidden;
    position: fixed;
    pointer-events: all;

    &.is-visible {
        visibility: visible;
        width: 200px;

        .Item {
            opacity: 1;
            transition: all .3s .1s $ease, opacity .3s .2s $ease;
        }

        .BaseContextMenu-Wrapper {}
    }

    .Item {
        font-size: 0.85rem;
        padding: 8px 15px;
        transition: all .4s .1s $ease, opacity 0s $ease;
        color: color(theme-dark);
        cursor: pointer;
        user-select: none;
        opacity: 0;

        &:hover {
            background-color: color(orange);
        }
    }
}

</style>
