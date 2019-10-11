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
    <mobile-demo>
      <router-view></router-view>
    </mobile-demo>
  </div>
</template>

<script>
import MobileDemo from '../fragment/mobileDemo.vue'
import Reveal from 'reveal.js'
export default {
  name: 'index',
  mounted () {
    Reveal.initialize({
      width: 1920,
      height: 946
    })
  },
  data () {
    return {
      msg: 'A project that includes a video streaming and queuing system',
      options: {
        licenseKey: 'YOUR_KEY_HEERE',
        anchors: ['/list', '/detail'],
        sectionsColor: '#fff'
      }
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
