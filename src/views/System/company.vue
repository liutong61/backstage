<template>
  <div row_search>
    <div class="row_search">
      <div class="search">
        <input type="text" placeholder="请输入需要查询的公司名称" class="search_content" />
        <div>搜索</div>
      </div>
      <div class="add">
        <img src="../../assets/tianjia.png" alt="添加公司图标" />
        <label for>添加公司</label>
      </div>
    </div>
    <div>
      <div>
        <div class="card"></div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import ltnav from "@/components/nav.vue";
export default {
  name: "home"
  // components: {
  //   ltnav
  // }
};
</script>
<style lang="scss" scoped>
.row_search {
  margin-top: 40px;
}
.search {
  float: left;
  div {
    height: 32px;
    line-height: 32px;
    width: 72px;
    border-radius: 0 4px 4px 0;
    float: left;
    background-color: #374afb;
    color: aliceblue;
    text-align: center;
  }
}
.search_content {
  float: left;
  font-size: 14px;
  font-weight: 200;
  height: 32px;
  width: 320px;
  border-radius: 4px 0 0 4px;
  -web-kit-appearance: none;
  -moz-appearance: none;
  box-sizing: border-box;
  border: 1px solid #c8cccf;
  color: #6a6f77;
  padding-left: 10px;
}
.add {
  float: left;
  background-color: rgba(88, 103, 221, 0.1);
  height: 34px;
  width: 104px;
  border-radius: 4px;
  margin-left: 24px;
  
  label {
    text-align: center;
    line-height: 32px;
    color: #5867dd;
    font-family: '	Source Han Sans CN';
    font-weight: 600;
  }
}
.card{
  width: 394px;
  height: 284px;
  background-color: white;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
}
</style>