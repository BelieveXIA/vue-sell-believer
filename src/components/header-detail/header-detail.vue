<template>
  <div v-show="visible" class="detail">
    <div class="shop-name">
      <h1>{{seller.name}}</h1>
      <x-start :size="48" :score="seller.score"></x-start>
    </div>
    <div class="info">
      <div class="title-wrapper">
        <div class="line"></div>
        <div class="title">优惠信息</div>
        <div class="line"></div>
      </div>
      <div v-if="seller.supports" class="discount-wrapper">
        <div
          class="discount-item"
          v-for="(item, index) in seller.supports"
          :key="index"
        >
          <support-ico :size="1" :type="item.type"></support-ico>
          <span class="description-text">{{item.description}}</span>
        </div>
      </div>
      <div class="title-wrapper">
        <div class="line"></div>
        <div class="title">商家公告</div>
        <div class="line"></div>
      </div>
      <div class="bulletin-text">{{seller.bulletin}}</div>
    </div>
    <div class="detail-close" @click="hide">
      <i class="icon-close"></i>
    </div>
  </div>
</template>

<script>
  import SupportIco from 'components/support-ico/support-ico.vue'
  import XStart from 'components/x-start/x-start.vue'
  import popupMixin from 'common/mixins/popup.js'

  export default {
    name: 'header-detail',
    mixins: [popupMixin],
    components: {
      SupportIco,
      XStart
    },
    props: {
      seller: {
        type: Object,
        default () {
          return {}
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "~common/stylus/mixin"
@import "~common/stylus/variable"
.detail
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  background: $color-background-s
  z-index: 100
  overflow: auto
  opacity: 1
  backdrop-filter: blur(10px)
  color: $font-color-white
  display: flex
  flex-direction: column
  align-items: center
  padding-top: 64px
  .shop-name
    h1
      font-size: 20px
      font-weight: 700
      line-height: 16px
      color: $font-color-white
      text-align: center
      margin-bottom: 16px
  .info
    margin: 27px 0
    color: $font-color-white
    .title-wrapper
      margin: 24px 0
      display: flex
      align-items: center
      justify-content: center
      .title
        margin: 0 12px
      .line
        width: 112px
        height: 2px
        background-color: rgba(255, 255, 255, .2)
    .discount-wrapper
      padding: 0 12px
      width: 80%
      margin: 0 auto
      .discount-item
        font-size: 12px
        line-height: 12px
        font-weight: 200
        margin-bottom: 12px
        &:last-child
          margin-bottom: 0
        span
          margin-left: 6px
    .bulletin-text
      font-size: 12px
      line-height: 24px
      font-weight: 200
      padding: 0 12px
      width: 80%
      margin: 0 auto
  .detail-close
    position: relative
    width: 30px
    height: 30px
    border: 1.6px solid #ddd
    border-radius: 15px
    margin: 64px auto 0 auto
    clear: both
    font-size: 32px
    color: rgba(255, 255, 255, .5)
    border: 1px sold #ccc
</style>
