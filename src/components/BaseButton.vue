<template>
  <div
    class="BaseButton"
    @click="$emit('click')"
    :class='[{"is-icon":icon},{"is-round":round}]'
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'BaseButton',
  props: {
    title: String,
    icon: Boolean,
    round: Boolean
  },
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.BaseButton {
  color: color(white);
  padding: 10px 25px;
  position: relative;
  background-color: color(orange);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all .195s $ease;
  box-shadow: 4px 9px 13px 0px rgba(color(orange), 0.1);

  &.is-icon {
    width: 20px;
    height: 20px;
    padding: 0px;
    box-sizing: content-box;
    display: inline-block;
    width: unset;
    height: unset;

    svg {
      width: 20px;
      height: 20px;
      padding: 17px;
      display: block;
      box-sizing: content-box;

    }
  }

  &.is-round {
    border-radius: 48%;
    padding: 0;
    position: relative;
  }

  &:hover {
    background-color: darken(color(orange), 2%);
  }

  span {
    font-size: 1rem;
    margin-right: 5px;
  }

}

</style>
