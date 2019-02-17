<template>
    <div
        class="ThemeSwitcher"
        :class='{"show-themes": showThemes}'
    >
        <Icon
            @click="switchTheme({name:'purple', event: $event})"
            :class='{"show-theme": showThemes}'
            icon="color"
            morphTo="color-2"
            fill="var(--color-theme-purple-light)"
        />
        <Icon
            @click="switchTheme({name:'gray', event: $event})"
            :class='{"show-theme": showThemes}'
            icon="color"
            morphTo="color-2"
            fill="var(--color-theme-gray-light)"
        />
        <Icon
            @click="switchTheme({name:'darkblue', event: $event})"
            :class='{"show-theme": showThemes}'
            icon="color"
            morphTo="color-2"
            fill="var(--color-theme-darkblue-light)"
        />
        <Icon
            @click="showThemes=!showThemes"
            icon="palette"
            fill="var(--color-theme-dark)"
        />
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    name: 'ThemeSwitcher',
    components: {},
    props: {},
    data: () => ({
        showThemes: false
    }),
    methods: {
        switchTheme({ name, event }) {
            let style = getComputedStyle(document.body);
            let color = style.getPropertyValue(`--color-theme-${name}`);
            let theme = { name, color }
            this.$emit('switchTheme', { theme, event });
        }
    },
    computed: { ...mapGetters({
            undoCounter: 'undoCounter',
        }),
    }
}

</script>
<style lang="scss">
.ThemeSwitcher {
    position: fixed;
    bottom: 20px;
    right: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    user-select: none;
    padding: 10px;
    z-index: zIndex(toolbar);
    transition: all .2s $ease;

    &::before {
        position: absolute;
        max-width: 54px;
        width: 100%;
        height: 100%;
        content: "";
        background-color: color(white);
        opacity: 1;
        right: 0;
        transition: all .2s $ease;
        box-shadow: 5px 8px 10px 0px rgba(black, 0.1);
    }

    &.show-themes {
        &:before {
            max-width: 220px;
        }

        .Icon {
            &:last-child {
                border-left: solid 1px rgba(black, 0.3);
                padding-left: 5px;
            }
        }
    }

    .Icon {
        cursor: pointer;
        margin-right: 5px;
        opacity: 0;
        visibility: hidden;
        transition: all .2s $ease;

        $num: 4;

        @while $num>0 {
            &:nth-child(#{4 - $num}) {
                transform: translateY(#{$num * 5px}) translateX(#{$num * 10px});
                $num: $num - 1;
            }
        }

        &:last-child {
            margin-right: 0;
            opacity: 1;
            visibility: visible;
            border-left: solid 1px rgba(black, 0);

        }

        &.show-theme {
            opacity: 1;
            visibility: visible;

            $num: 4;

            @while $num>0 {
                &:nth-child(#{4 - $num}) {
                    transform: translateY(0) translateX(0);
                    $num: $num - 1;
                }
            }
        }
    }
}

</style>
