<template>
  <div class="Button">
    <span>{{title}}</span>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    title: String,
  },
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Button {
    color: color(black);
    padding: 10px 25px;
    position: relative;
    background-color: color(orange);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: $windowBorder;

    span {
        font-size: 0.85rem;
    }
}

</style>
