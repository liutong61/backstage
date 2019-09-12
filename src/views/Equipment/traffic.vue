<template>
  <div class="title_background">
    <div class="center">
      <div class="biaotou">
        <div class="xinxi">
          <img src="../../assets/cheliangxinxi.png" alt="" />
          <label for="">车辆信息列表</label>
        </div>
        <q-btn color="primary" icon="add" class="q-btn" label="添加车辆" />
      </div>
      <div class="line"></div>
      <div class="q-gutter-sm">
        <RadioGroup v-model="animal">
          <Radio label="全部"></Radio>
          <Radio label="在线"></Radio>
          <Radio label="离线"></Radio>
        </RadioGroup>
      </div>
    </div>
  </div>
</template>

<script>
// import lt_Button from "@/components/lt-Button.vue"
export default {
  // components: {
  //   'lt-Button': lt_Button
  // },
  name: "home",
  data() {
    return {
      shape: 0
    };
  }
};
</script>
<style lang="scss" scoped>
.title_background {
  overflow: hidden;
  position: relative;
}
.center {
  background-color: rgb(255, 255, 255);
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 4px;
  margin-top: 20px;
}
.biaotou {
  padding: 20px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.xinxi {
  label {
    font-size: 16px;
    font-weight: 500;
  }
}
.addCar {
  background-color: #374afb;
  width: 108px;
  height: 34px;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  img {
    height: 18px;
    margin-right: 8px;
  }
  label {
    font-size: 16px;
    color: #fff;
  }
}
.q-btn {
  font-size: 16px;
  padding: 0px 8px;
}
.line {
  height: 1px;
  background-color: #e6e6e6;
}
</style>

<style>
.on-left {
  margin-right: 0px;
}
</style>

