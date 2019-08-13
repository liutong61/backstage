<template>
  <div>
    <nav-bar></nav-bar>
    <app-main></app-main>
  </div>
</template>

<script>
import { AppMain, NavBar } from '@/views/layout/components'

export default {
  name: 'layout',
  components: {
    AppMain,
    NavBar
  },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
