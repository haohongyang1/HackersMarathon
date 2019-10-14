<template>
  <div class="base-info-wrapper">
    <div class="info-block">
      <h1>老师标签</h1>
      <div class="func-item">
        <div class="left">
          <span class="tag">优先约</span>
        </div>
        <div class="title">课后优先预约相同特定老师隔周课</div>
      </div>
      <div class="func-item">
        <div class="left">
          <span class="tag">优质约</span>
        </div>
        <div class="title">优质易约课</div>
      </div>
    </div>
    <div class="info-block">
      <h1>
        <b>
          家长评价
          <span>5.00</span>
        </b>

        <a href="javascript:;">
          <span>864</span>
          人评论
          <nut-icon type="right" class="icon" size="14px"></nut-icon>
        </a>
      </h1>
      <div class="evaluate">
        <div class="top">
          <div class="left">
            <nut-avatar
              bgIcon=""
              bgImage="https://avatars2.githubusercontent.com/u/12455724?s=88&v=4"
            ></nut-avatar>
            137****9999
          </div>
          <div class="rate">
            <nut-rate
              :size="16"
              :spacing="4"
              :checkedIcon="icon1"
              :uncheckedIcon="icon2"
            ></nut-rate>
          </div>
        </div>
        <div class="content">孩子喜欢</div>
        <div class="lesson-info">新版VIPKID主修课程 - Unit 2 - Lesson 7</div>
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
  name: 'base_info.vue'
}
</script>

<style lang="stylus" scoped>
  .base-info-wrapper
    .info-block
      padding 24px 0
      margin 0 16px
      font-size 14px
      line-height 18px
      h1
        color #000
        font-size 24px
        font-weight bolder
        display flex
        justify-content space-between
        line-height 28px
        span
          color #f85415
        a
          font-size 14px
          font-weight lighter
          .icon
            line-height 16px
      .func-item
        display flex
        padding 4px 0
        .left
          flex 1
        .tag
          color #fff
          background #f85415
          padding 2px 4px
          border-radius 4px
          font-size 12px
        .title
          flex 3
      .evaluate
        .top
          display flex
          justify-content space-between
          .left
            line-height 32px
            display flex
          .rate
            width 100px
        .content
          color #333
          font-size 16px
          line-height 24px
          padding 4px 0
      .table
        .tr
          display flex
        .tr-left
          flex 1
        .tr-right
          flex 3
          color #333
</style>
