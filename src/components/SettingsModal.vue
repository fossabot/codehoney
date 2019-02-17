<template>
    <BaseModal
        class="BaseModal--settings"
        :open="open"
        @close="$emit('close')"
    >
        <div class="Themes">
            <span>Themes</span>
            <div class="Themes-Wrapper">
                <img
                    v-for="(theme,i) in themes"
                    :key="i"
                    :src="theme.src"
                    class="Theme"
                >
            </div>
        </div>
    </BaseModal>
</template>
<script>
import BaseModal from '../components/BaseModal.vue';

export default {
    name: 'SettingsModal',
    props: {
        open: Boolean,
    },
    data: () => ({
        editorFullscreen: false,
        themes: [{
            src: require('../assets/img/themes/theme-1.png')
        }, {
            src: require('../assets/img/themes/theme-2.png')
        }, {
            src: require('../assets/img/themes/theme-3.png')
        }]
    }),
    components: {
        BaseModal,
    },
    methods: {}
}

</script>
<style scoped lang="scss">
.BaseModal--settings {
  position: absolute;
  color: color(black);

  .Themes-Wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

  }

  .Theme {
    margin: 5px;
    margin-bottom: 0;
    display: block;
    object-fit: contain;
    width: 180px;
    height: 100%;
    cursor: pointer;
      border: solid 3px var(--color-orange);

    &:first-child{
      margin-left: 0;
    }
    &.is-selected{
      border: solid 3px var(--color-orange);
    }
  }
}

</style>
