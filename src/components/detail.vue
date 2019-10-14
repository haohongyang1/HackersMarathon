<template>
  <div class="page-container-detail">
    <header>
      <video src="/static/video/teacher.mp4" autoplay loop></video>
    </header>
    <div class="base-info">
      <div class="info">
        <div class="avatar">
          <img src="https://img.vipkidstatic.com/ter/tr/img/6195ff3a3d564ff8a2fbc691c6c26ce3.png" alt="头像">
        </div>
        <div class="names">
          <div class="title">Christy CK</div>
          <div class="sub-title">女 7年教龄</div>
          <div class="tags">
            <div class="tag">level1</div>
            <div class="tag">level2</div>
            <div class="tag">level3</div>
            <div class="tag">level4</div>
          </div>
        </div>
        <div class="collect">
          <img src="/static/collect.svg" alt="关注">
          <p>已关注</p>
        </div>
      </div>
      <div class="data">
        <div class="item">家长评价 <span>5.00</span></div>
        <div class="item">关注数 <span>347</span></div>
        <div class="item">完课率 <span>100%</span></div>
      </div>
    </div>
    <nut-tab @tab-switch="tabSwitch">
      <nut-tab-panel tabTitle="老师信息" iconUrl="/static/info.svg">
        <base-info></base-info>
      </nut-tab-panel>
      <nut-tab-panel tabTitle="内容列表" iconUrl="/static/content.svg"></nut-tab-panel>
      <nut-tab-panel tabTitle="课程列表" iconUrl="/static/class.svg"></nut-tab-panel>
    </nut-tab>
  </div>
</template>

<script>
import baseInfo from './base_info.vue'
export default {
  name: 'list',
  data () {
    return {
      msg: 'A project that includes a video streaming and queuing system',
      editableTabs: [
        {
          'tabTitle': '老师信息',
          'tabUrl': '/info.svg'
        },
        {
          'tabTitle': '视频列表',
          'tabUrl': 'http://img13.360buyimg.com/uba/jfs/t30331/209/562746340/2190/6619973d/5bf763aaN6ff02099.jpg',
          'content': '<p>日用品内容</p>'
        },
        {
          'tabTitle': '课程列表',
          'tabUrl': 'http://img20.360buyimg.com/uba/jfs/t30346/262/553689202/2257/5dfa3983/5bf76407N72deabf4.jpg',
          'content': '<p>运动器材内容</p>'
        }
      ]
    }
  },
  methods: {
    tabSwitch: function (index, event) {
      console.log(index + '--' + event.target)
    }
  },
  components: {
    baseInfo
  }
}
</script>

<style lang="stylus" scoped>
.page-container-detail
  width 100%
  padding-bottom 1000px
  header
    width 100%
    video
      width 100%
      max-width 100%
      min-height 282px
  .base-info
    font-size 14px
    font-weight normal
    padding 24px 0
    margin 0 16px
    border-bottom 1px solid #eaeaea
    .info
      display flex
      justify-content space-between
      padding 0 0 24px
      line-height 24px
      .avatar
        width 76px
        height 76px
        border-radius 50%
        overflow hidden
        img
          max-width 100%
          max-height 100%
      .names
        width 168px
      .title
        font-size 24px
        color #000
        font-weight bold
        line-height 30px
      .tags
        display flex
        .tag
          padding 2px
          border 1px solid #93a1a1
          border-radius 4px
          margin-right 4px
          font-size 12px
          line-height 12px
      .collect
        cursor pointer
        img
          width 48px
          height 48px
        p
          margin 0
    .data
      display flex
      justify-content space-between
      span
        color #f45815
  .info-block
    padding 24px 0
    margin 0 16px
    font-size 14px
    line-height 18px
    h1
      color #000
      font-size 24px
      font-weight bolder
    .table
      .tr
        display flex
      .tr-left
        flex 1
      .tr-right
        flex 3
        color #333
</style>
