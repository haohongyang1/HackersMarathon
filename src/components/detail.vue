<template>
  <div class="page-container-detail">
    <header>
      <video src="/static/video/teacher.mp4" loop></video>
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
    <div class="info-block">
      <h1>老师信息</h1>
      <div class="table">
        <div class="tr">
          <div class="tr-left">来自</div>
          <div class="tr-right">美国</div>
        </div>
        <div class="tr">
          <div class="tr-left">学位</div>
          <div class="tr-right">学士</div>
        </div>
        <div class="tr">
          <div class="tr-left">毕业院校</div>
          <div class="tr-right">Utah State University</div>
        </div>
        <div class="tr">
          <div class="tr-left">教学特点</div>
          <div class="tr-right">你好，我是Capri老师，来自美国，毕业于Utah State University，已获得学士学位，已获得TEFL资格证书，我有1年教学经验。我曾在网上教过中国学生学英语，还曾在一所小学工作，做过学生的家教。我喜欢和孩子们在一起享受快乐！我努力为学生提供良好的课堂环境，让他们学习和练习英语。闲暇时，我喜欢阅读和学习其他外语。我等不及要见你了！欢迎大家来订课！</div>
        </div>
        <div class="tr">
          <div class="tr-left">自我介绍</div>
          <div class="tr-right">Utah State University</div>
        </div>
      </div>
    </div>
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
        width 200px
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
