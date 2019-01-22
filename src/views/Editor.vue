<template>
  <div class="Editor">
    <Headline title="NumWays(n, steps)" description="returns the numbers of possible ways to go the stairs up for a given set of steps" />
    <Code :content="content"/>
  </div>
</template>
<script>
import Headline from '../components/editor/Headline.vue';
import Code from '../components/editor/Code.vue';

export default {
  name: 'Editor',
  components:{
    Headline,
    Code,
  },
  props: {
  },
   data: () => ({
    content: "/*hier steht ein Kommentar*/ var num = 0;var steps = [1,2,4];function numWays(n) {if (n == 0) {num++;}for (var step of steps) {if (n - step >= 0) {  numWays(n - step);  }}}console.time();numWays(30);console.timeEnd();document.getElementById('num').innerHTML = 'Number of ways: ' + num;",
  }),
};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Editor {
    min-width: 575px;
    position: relative;
    z-index: 1;
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding-left: 45px;
    overflow: auto;
    padding-right: 50px;
    padding-bottom: 50px;
    
    &::-webkit-scrollbar {
      width: 5px;
      height: 4px;
      background-color: transparent;
      /* or add it to the track */
    }

    /* optional: show position indicator in red */
    &::-webkit-scrollbar-thumb {
      background: color(light-purple);
      height: 4px;
      width: 4px;
    }
  }
</style>
