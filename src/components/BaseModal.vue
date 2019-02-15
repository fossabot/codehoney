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
                fill="var(--color-theme-lighter)"
                @click="close"
            />
        </div>
    </div>
</template>
<script>
export default {
    name: 'BaseModal',
    props: {
        isOpen: Boolean
    },
    methods: {
        close() {
            this.isOpen = false;
        }
    }
}

</script>
<style scoped lang="scss">
.BaseModal {
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &-Wrapper{
    background-color: var(--color-theme-dark);
    padding: 20px 30px;
    width: 50vw;
  }

  .Icon--close {
    position: absolute;
    top: 20px;
    right: 30px;
    cursor: pointer;
  }
}

</style>
