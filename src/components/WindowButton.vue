<template>
    <div
        class="WindowButton"
        :class="[{'is-red':red},{'is-green':green},{'is-orange':orange},]"
    ></div>
</template>
<script>
export default {
    name: 'WindowButton',
    props: {
        red: Boolean,
        orange: Boolean,
        green: Boolean
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.WindowButton {
  position: relative;
  background-color: rgba(black, 0.1);
  cursor: pointer;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  margin-right: 7px;
  border: solid 1px rgba(black, 0.05);

  &.is-red {
    background-color: rgba(color(red), 1);
  }

  &.is-green {
    background-color: rgba(color(green), 1);
  }

  &.is-orange {
    background-color: rgba(color(orange), 1);
  }
}

</style>
