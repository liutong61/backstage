<template>
  <section id="app-main" >
     <transition name="el-fade-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
   
  }
}
</script>

<style  rel="stylesheet/scss"  lang="scss" scoped>
#app-main{
  max-width: 1640px;
  margin: 0px auto;
}
</style>


