<template>
    <div
        class="BaseModal"
        :class="{'is-open':isOpen}"
    >
        <div class="BaseModal-Wrapper">
            <slot></slot>
            <Icon
                class="Icon--close"
                icon="close"
                morphTo="close-2"
                fill="currentColor"
                @click="close"
            />
        </div>
    </div>
</template>
<script>
export default {
    name: 'BaseModal',
    props: {
        open: Boolean
    },
    computed: {
        isOpen: {
            get() {
                return this.open;
            },
            set(value) {
                return value;
            }
        }

    },
    methods: {
        close() {
            this.isOpen = false;
            this.$emit('close');
        }
    }
}

</script>
<style
    scoped
    lang="scss"
>
.BaseModal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    visibility: hidden;
    z-index: zIndex(modal);
    transition: all .2s $ease;
    // background-color: rgba(black,0.5);

    &.is-open {
        opacity: 1;
        visibility: visible;

        .BaseModal-Wrapper {
            transform: translateX(0%);
        }
    }

    &-Wrapper {
        background-color: var(--color-white);
        padding: 20px;
        left: 0px;
        width: calc(25% - 0px);
        max-width: 335px;
        height: calc(100% - 0px);
        position: relative;
        transform: translateX(-120%);
        transition: all .4s $ease;
        // border: solid 2px var(--color-orange);
    }

    .Icon--close {
        position: absolute;
        top: 15px;
        right: 30px;
        cursor: pointer;
        color: var(--color-black);
    }
}

</style>
