<template>
  <div class="star" :class="starType">
    <span
      class="star-item"
      v-for="(itemClass, index) in itemClasses"
      :class="itemClass"
      :key="index"
    ></span>
  </div>
</template>

<script>
  const LENGTH = 5
  const CLS_ON = 'on'
  const CLS_HALF = 'half'
  const CLS_OFF = 'off'

  export default {
   name: 'x-star',
   props: {
    size: {
      type: Number,
      default: 36
    },
    score: {
      type: Number,
      default: 0
    }
  },
  computed: {
    starType () {
      return 'star-' + this.size
    },
    itemClasses () {
      const result = []
      const score = Math.floor(this.score * 2) / 2
      const hasHalf = score % 1 !== 0
      const integer = Math.floor(score)
      for (let i = 0; i < integer; i++) {
        result.push(CLS_ON)
      }
      if (hasHalf) {
        result.push(CLS_HALF)
      }
      while (result.length < LENGTH) {
        result.push(CLS_OFF)
      }
      return result
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/mixin.styl"
  .star
    display: flex
    align-items: center
    justify-content: center
    &.star-48
      .star-item
        width: 20px
        height: 20px
        margin-right: 22px
        background-size: 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('star48_on')
        &.half
          bg-image('star48_half')
        &.off
          bg-image('star48_off')
    &.star-36
      .star-item
        width: 15px
        height: 15px
        margin-right: 6px
        background-size: 15px 15px
        background-repeat: no-repeat
        &.last-child
          margin-right: 0
        &.on
          bg-image('star36_on')
        &.half
          bg-image('star36_half')
        &.off
          bg-image('star36_off')
    &.star-24
      .star-item
        width: 10px
        height: 10px
        margin-right: 3px
        background-size: 10px 10px
        &:last-child
          margin-right: 0
        &.on
          bg-image('star24_on')
        &.half
          bg-image('star24_half')
        &.off
          bg-image('star24_off')
</style>
