<template>
  <div class="interCard">
    <div class="ICbj">
      <div class="ICcenter">
        <el-form
          :label-position="labelPosition"
          label-width="100px"
          :model="formLabelAlign"
        >
          <el-form-item label="物联网卡卡号">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="主机设备ID">
            <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>
          <el-form-item label="物联网卡类别">
            <el-input v-model="formLabelAlign.type"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "left",
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.ICbj {
  width: 100%;
  color: azure;
  height: 200px;
}
.ICcenter {
  width: 80%;
  height: 1000px;
  color: azure;
}
.el-input {
  width: 410px;
}
</style>