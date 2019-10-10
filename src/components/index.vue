<template>
  <div class="page-container reveal">
<!--    <full-page ref="fullpage" :options="options" id="fullpage">-->
<!--      <div class="section">-->
<!--        <h1>第一页</h1>-->
<!--        <h1>Index.vue写ppt内容</h1>-->
<!--        <h1>子路由配置功能页</h1>-->
<!--        <h1>app.vue中，把手机框固定定位在右侧</h1>-->
<!--        <h1>{{ msg }}</h1>-->
<!--      </div>-->
<!--      <div class="section">-->
<!--        <h1>第二页</h1>-->
<!--        <h1>{{ msg }}</h1>-->
<!--      </div>-->
<!--    </full-page>-->
    <div class="slides">
      <section data-transition="zoom">{{ msg }}</section>
      <section data-transition="slide-in fade-out">
        <h2>asdasda</h2>
        <mobile-demo>
          <router-view></router-view>
        </mobile-demo>
        <section>
          <section class="fragment">
            <h2>Vertical Slides</h2>
            <p>Slides can be nested inside of each other.</p>
            <p>Use the <em>Space</em> key to navigate through all slides.</p>
            <br>
            <a href="#" class="navigate-down">
              <img width="178" height="238" data-src="https://s3.amazonaws.com/hakim-static/reveal-js/arrow.png" alt="Down arrow">
            </a>
          </section>
          <section class="fragment">
            <h2>Basement Level 1</h2>
            <p>Nested slides are useful for adding additional detail underneath a high level horizontal slide.</p>
          </section>
          <section class="fragment">
            <h2>Basement Level 2</h2>
            <p>That's it, time to go back up.</p>
            <br>
            <a href="#/2">
              <img width="178" height="238" data-src="https://s3.amazonaws.com/hakim-static/reveal-js/arrow.png" alt="Up arrow" style="transform: rotate(180deg); -webkit-transform: rotate(180deg);">
            </a>
          </section>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
import MobileDemo from '../fragment/mobileDemo.vue'
import Reveal from 'reveal.js'
export default {
  name: 'index',
  mounted () {
    Reveal.initialize({
      width: 1920
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
  /*@import "reveal.js/css/reveal.css"*/
  /*@import "reveal.js/css/theme/blood.css"*/
  .page-container
    /*position absolute*/
</style>
