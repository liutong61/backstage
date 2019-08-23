<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
body{
  margin: 0;padding: 0;
  background-color: #f8f9fa;
  font-family: '	Source Han Sans CN';
}
h1,h2,h3,h4,h5,h6,ul,li{
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
