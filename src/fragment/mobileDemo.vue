<template>
  <div class="demo-container">
    <div class="phone-container">
      <div class="project-container">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'mobileDemo',
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
.demo-container
  position absolute
  z-index 1000
  top 0
  right 30px
  bottom 0
  width 408px
  height 895px
  padding 1vh 0
.phone-container
  width 100%
  height 100%
  background-image url('../assets/phoneBackground.png')
  background-size 100% 98%
  background-repeat no-repeat
.project-container
  position relative
  width 375px
  height 667px
  overflow auto
  top 10%
  left 18px
  background #ffffff
  border-radius 1%
  &::-webkit-scrollbar
    width 0 !important
</style>
