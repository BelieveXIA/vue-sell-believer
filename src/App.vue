<template>
  <div id="app">
    <x-header :seller="seller"></x-header>
    <header-detail :seller="seller"></header-detail>
  </div>
</template>

<script>
import { getSeller } from 'api/index.js'

import XHeader from './components/x-header/x-header.vue'
import HeaderDetail from './components/header-detail/header-detail.vue'

export default {
  name: 'App',
  components: {
    XHeader,
    HeaderDetail
  },
  data () {
    return {
      seller: {}
    }
  },
  created () {
    getSeller().then((seller) => {
      this.seller = seller
      console.log(this.seller)
    })
  }
}
</script>

<style lang="stylus">

</style>
