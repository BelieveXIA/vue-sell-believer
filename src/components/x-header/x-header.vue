<template>
  <div class="header" @click="show">
    <div class="header-content">
      <div class="avatar">
        <img :src="seller.avatar"/>
      </div>
      <div class="content">
        <div class="title-wrapper">
          <span class="brand"></span>
          <span class="title">{{seller.name}}</span>
        </div>
        <div class="info">
          <span>{{seller.description}}</span> / <span>{{seller.deliveryTime}}</span>分钟送达
        </div>
        <div v-if="seller.supports" class="discount">
          <support-ico :size="1" :type="seller.supports[0].type" ></support-ico>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="header-bg">
      <img :src="seller.avatar"/>
    </div>
  </div>
</template>

<script>
  import SupportIco from 'components/support-ico/support-ico'
  import popupMixin from 'common/mixins/popup.js'

  export default {
    name: 'x-header',
    mixins: [popupMixin],
    components: {
      SupportIco
    },
    props: {
      seller: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      // showDetail() {
      //   this.headerDetailComp = this.headerDetailComp || this.$createHeaderDetail({
      //     $props: {
      //       seller: 'seller'
      //     }
      //   })
      //   this.headerDetailComp.show()
      // }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .header
    position: relative
    width: 100%
    background-color: $color-background-ss
    .header-content
      position: relative
      display: flex
      align-items: center
      padding: 24px 12px 18px 24px
      .avatar
        width: 64px
        flex: 0 0 64px
        margin-right: 16px
        img
          width: 64px
          height: 64px
          border-radius: 2px
      .content
        padding: 2px 0
        flex: 1
        .title-wrapper
          display: flex
          margin-bottom: 8px
          .brand
            margin-right: 6px
            width: 30px
            height: 18px
            bg-image('brand')
            background-size: 30px 18px
            background-repeat: no-repeat
          .title
            font-size: 16px
            line-height: 18px
            font-weight: bold
            color: $font-color-white
        .info
          margin-bottom: 10px
          font-size: 12px
          line-height: 12px
          color: $font-color-white
          font-weight: 200
        .discount
          display: flex
          align-items: center
          .text
            margin-left: 4px
            font-size: 10px
            line-height: 12px
            font-weight: 200
            color: $font-color-white
      .support-count
        position: absolute
        right: 12px
        bottom: 18px
        display: flex
        border-radius: 8px
        background-color: $color-background-sss
        padding: 7px 8px
        align-items: center
        text-align: center
        border-radius: 14px
        color: $font-color-white
        font-weight: 200
        font-size: 10px
        .count
          margin-right: 2px
    .bulletin-wrapper
      position: relative
      display: flex
      align-items: center
      height: 28px
      background-color: $color-background-sss
      font-size: 10px
      line-height: 28px
      font-weight: 200
      color: $font-color-white
      padding: 0 12px
      .bulletin
        flex: 0 0 22px
        width: 22px
        height: 12px
        margin-right: 4px
        bg-image('bulletin')
        background-size: 22px 12px
        background-repeat: no-repeat
      .bulletin-text
        flex: 1
        margin-right: 4px
        ellipsis()
      .icon-keyboard_arrow_right
        flex: 0 0 10px
        width: 10px
    .header-bg
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: -1
      filter: blur(10px)
      overflow: hidden
</style>
