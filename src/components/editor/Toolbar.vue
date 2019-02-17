<template>
    <div class="Toolbar">
        <Icon
            @click="copy"
            :disabled="!snippet"
            icon="copy"
            name="copy"
            morphTo="copy-2"
            hint="copied"
            fill="var(--color-orange)"
        />
        <Icon
            @click="beautify"
            :disabled="!snippet"
            icon="tidy"
            name="tidy"
            morphTo="tidy-2"
            hint="tidy!"
            fill="var(--color-green)"
        />
        <Icon
            @click="expand"
            :disabled="!snippet"
            icon="expand"
            name="expand"
            morphTo="expand-2"
            hint="swishh"
            fill="var(--color-blue)"
        />
        <Icon
            @click="remove"
            :disabled="!snippet"
            icon="bin"
            name="remove"
            morphTo="bin-2"
            hint="removed"
            fill="var(--color-red)"
        />
        <Icon
            @click="undo"
            :disabled="undoCounter<=0"
            icon="undo"
            name="undo"
            morphTo="undo-2"
            hint="reverted"
            fill="var(--color-purple)"
        />
        <!--         <Icon
            @click="showThemes=!showThemes"
            icon="palette"
            name="theme"
            morphTo="palette-2"
            hint="theme"
            fill="var(--color-theme)"
        /> -->
        <Icon
            @click="switchTheme({name:'purple', event: $event})"
            v-if="showThemes"
            icon="color"
            name="purple"
            morphTo="color-2"
            hint="purple"
            fill="var(--color-theme-purple)"
        />
        <Icon
            @click="switchTheme({name:'gray', event: $event})"
            v-if="showThemes"
            icon="color"
            name="gray"
            morphTo="color-2"
            hint="gray"
            fill="var(--color-theme-gray)"
        />
        <!--         <Icon
            @click="switchTheme({name:'white', event: $event})"
            v-if="showThemes"
            icon="color"
            name="white"
            morphTo="color-2"
            hint="white"
            fill="var(--color-theme-white)"
        /> -->
        <Icon
            @click="switchTheme({name:'darkblue', event: $event})"
            v-if="showThemes"
            icon="color"
            name="darkblue"
            morphTo="color-2"
            hint="darkblue"
            fill="var(--color-theme-darkblue)"
        />
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Toolbar',
    components: {},
    props: {
        snippet: Boolean,
    },
    data: () => ({
        showThemes: false
    }),
    methods: {
        copy(code) {
            this.$emit('copy');
        },
        remove() {
            this.$emit('remove');
        },
        expand() {
            this.$emit('expand');
        },
        beautify() {
            this.$emit('beautify');
        },
        undo() {
            this.$emit('undo');
        },
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
.Toolbar {
    position: fixed;
    right: 50px;
    top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    padding: 25px 15px;
    background-blend-mode: multiply;
    z-index: zIndex(toolbar);
    transition: all .2s $ease;

    &::before {
        position: absolute;
        width: 100%;
        height: 100%;
        content: "";
        background-color: var(--color-theme-light);
        opacity: 0.5;
        transition: all .2s $ease;
    }

    .Icon {
        cursor: pointer;
        margin-bottom: 15px;

        &:last-child {
            margin-bottom: 0;
        }
    }
}

</style>
