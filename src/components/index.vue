<template>
  <div class="page-container reveal">
<!--    <div class="slides">-->
<!--      <section data-transition="slide">-->
<!--        {{ msg }}-->
<!--        -->
<!--      </section>-->
<!--      <section data-transition="slide">-->
<!--        {{ msg }}-->
<!--      </section>-->
<!--    </div>-->
    <router-link to="/">首页</router-link>
    <router-link to="/list">列表页</router-link>
    <router-link to="/detail">详情页</router-link>
    <mobile-demo>
      <router-view></router-view>
    </mobile-demo>
  </div>
</template>

<script>
import MobileDemo from '../fragment/mobileDemo.vue'
// import Reveal from 'reveal.js'
export default {
  name: 'index',
  mounted () {
    // Reveal.initialize({
    //   width: 1920,
    //   height: 946
    // })
  },
  data () {
    return {
      msg: 'A project that includes a video streaming and queuing system'
    }
  },
  components: {
    MobileDemo
  }
}
</script>

<style lang="stylus" scoped>
  .page-container
    position absolute
</style>
<style lang="stylus">
  img, video
    max-width 100% !important
    max-height 100% !important
</style>
