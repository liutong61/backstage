<template>
  <div>
    <ltnav />
    <div class="xinxi">
      <h4>首页</h4>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ltnav from "@/components/nav.vue";
export default {
  name: "home",
  components: {
    ltnav
  }
};
</script>
<style>
.xinxi {
  background-color: white;
  width: 1640px;
  height: 50px;
  position: absolute;
  top: 138px;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 4px;
}
h4 {
  color: black;
  font-size: 16px;
  padding-left: 20px;
  font-weight: 600;
  line-height: 50px;
}
</style>