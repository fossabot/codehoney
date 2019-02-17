<template>
    <div
        class="CategoryAddButton"
        :class="{'is-selected':isSelected}"
        @click="open"
        v-click-outside="close"
    >
        <Icon
            class="Icon--add"
            icon="plus"
            fill="currentColor"
            :width="0.75"
            :height="0.75"
            @click="close"
        />
        <input
            spellcheck="false"
            v-if="isSelected"
            ref="input"
            class="CategoryAddButton-Input"
            v-model="language"
            @keyup.enter="handleEnterPress"
        >
    </div>
</template>
<script>
import ClickOutside from 'vue-click-outside';

export default {
    name: 'CategoryAddButton',
    props: {
        item: Object,
    },
    directives: {
        ClickOutside
    },
    data: () => ({
        isSelected: false,
        clickedClose: false,
        language: ''
    }),
    methods: {
        open(el) {
            if (this.clickedClose) { return }
            this.isSelected = true;
            setTimeout(() => { this.$refs.input.focus(); }, 10);
        },
        close() {
            this.clickedClose = true;
            this.isSelected = false;
            this.language = "";
            setTimeout(() => { this.clickedClose = false; }, 300);
        },
        handleEnterPress() {
            this.$emit('add', this.language);
            this.isSelected = false;
            this.language = "";
        }
    },
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.CategoryAddButton {
    padding: 8px 0;
    transition: all .295s $ease;
    cursor: pointer;
    padding-left: $appDistanceLeft;
    padding-right: 30px;
    user-select: none;
    position: relative;
    opacity: 0.5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: calc(1rem + 8px);
    box-sizing: content-box;

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
        color: rgba(color(black), 1);
        opacity: 1;

        &::before {
            transform: translateX(-95%) translateZ(0);
        }
    }

    &.is-selected {
        color: rgba(color(black), 1);
        opacity: 1;
        cursor: unset;

        &::before {
            transform: translateX(-8%) translateZ(0);
        }

        .Icon--add {
            transform: translateX(160px) translateZ(0) rotateZ(45deg);
        }
    }

    .Icon--add {
        left: 16px;
        transition: all .295s $ease;
        position: absolute;
        color: var(--color-theme) !important;
        height: 1rem;
        z-index: zIndex(default)+2;

    }

    .CategoryAddButton-Input {
        font-size: 1rem;
        position: relative;
        letter-spacing: 0.5px;
        line-height: 1.5em;
        color: var(--color-theme);
    }
}

</style>
