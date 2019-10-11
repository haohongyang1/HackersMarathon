<template>
  <div class="page-container">
    <h1>详情页</h1>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      msg: 'A project that includes a video streaming and queuing system',
      options: {
        licenseKey: 'YOUR_KEY_HEERE',
        anchors: ['', 'page2', 'page3'],
        sectionsColor: '#fff'
      }
    }
  },
  components: {
  }
}
</script>

<style lang="stylus" scoped>
.page-container
  position absolute
</style>
