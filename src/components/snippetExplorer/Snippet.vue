<template>
  <div class="Snippet" :class="[{'is-selected':item.isSelected}]" @click="click">
    <h3>{{item.name}}</h3>
    <p class="Description">{{item.description}}</p>
  </div>
</template>
<script>
export default {
  name: 'Snippet',
  props: {
    item: Object,
  },
  methods: {
    click(el) {
      this.$emit('click', this.item.id)
    },
  },
  computed: {},
  mounted: function() {

  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../styles/code-highlighting';

.Snippet {
  padding: 15px 25px 15px;
  transition: all .295s $ease;
  cursor: pointer;
  user-select: none;
  position: relative;
  color: rgba(color(white), 1);
  border-bottom: solid 1px rgba(color(white), 0.08);
  opacity: 0.5;
  width: 100%;

  &:hover {
    color: rgba(color(white), 1);
    background-color: rgba(color(black), 0.35);
    opacity: 1;
  }

  &.is-selected {
    background-color: rgba(color(black), 0.35);
    color: rgba(color(white), 1);
    opacity: 1;
    padding: 25px 25px 25px;

    p {
      white-space: normal;
      max-height: 3rem;
    }

    &::before {
      opacity: 1;
      left: 0px;
    }
  }

  &::before {
    position: absolute;
    top: 0;
    height: 100%;
    width: 10px;
    left: -4px;
    content: "";
    background-color: color(orange);
    opacity: 0;
    transition: all .295s $ease;
  }

  &:first-child {
    border-top: solid 1px rgba(color(white), 0.08);
  }

  &:last-child {
    margin-bottom: 50px;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 0.25rem;
    font-size: 1rem;
  }

  p {
    margin: 0;
    color: rgba(color(white), 0.5);
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.85rem;
    transition: all .295s $ease;
    line-height: 1rem;
    max-height: 1rem;
  }
}

</style>
