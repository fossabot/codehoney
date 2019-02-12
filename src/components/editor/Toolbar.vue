<template>
  <div class="Toolbar">
    <Icon
      @click="copy"
      icon="copy"
      name="copy"
      morphTo="copy-2"
      hint="copied"
      fill="#f4b865"
    />
    <Icon
      @click="beautify"
      icon="tidy"
      name="tidy"
      morphTo="tidy-2"
      hint="tidy!"
      fill="#5EB5B1"
    />
    <Icon
      @click="expand"
      icon="expand-2"
      name="expand"
      morphTo="collapse"
      hint="swishh"
      fill="#59A6D0"
    />
    <Icon
      @click="remove"
      icon="bin"
      name="remove"
      morphTo="bin-2"
      hint="removed"
      fill="#F05D5E"
    />
    <Icon
      @click="undo"
      icon="undo"
      name="undo"
      morphTo="undo-2"
      hint="reverted"
      fill="#5DF0EF"
    />
  </div>
</template>
<script>
export default {
  name: 'Toolbar',
  components: {},
  props: {
    title: String,
    description: String,
  },
  data: () => ({ expanded: false }),
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
    undo(){
      this.$emit('undo');
    },
  },
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.Toolbar {
    position: fixed;
    right: 20px;
    top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    padding: 25px 15px;
    background-color: rgba(255, 255, 255, 0.05);

    .Icon {
        cursor: pointer;
        margin-bottom: 15px;

        &:last-child {
            margin-bottom: 0;
        }
    }
}

</style>
