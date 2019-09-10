<template>
  <div class="company">
    <div class="row_search clearfix">
      <div class="search">
        <input
          type="text"
          placeholder="请输入需要查询的公司名称"
          class="search_content"
        />
        <div>搜索</div>
      </div>
      <div class="add" @click="dialogVisible = true">
        <img src="../../assets/tianjia.png" alt="添加公司图标" />
        <label for>添加公司</label>
      </div>
    </div>
    <div class="row_card">
      <div class="card" v-for="c in companys" :key="c.name">
        <p>{{ c.name }}</p>
        <img src="../../assets/del.png" alt="" class="delete" />
        <div class="show">
          <img src="../../assets/phone_number.png" alt="公司电话图标" />
          <label for="">公司电话：0752-2616166</label>
        </div>
        <div class="show">
          <img src="../../assets/index.png" alt="官网图标" />
          <label for="">公司官网：wwww.goldingmedia.com</label>
        </div>
        <div class="show">
          <img src="../../assets/beizhu.png" alt="备注图标" />
          <label for="">备注：</label>
        </div>
        <div class="show">
          <img src="../../assets/time.png" alt="时间图标" />
          <label for="">注册时间：2019-5-20</label>
        </div>
        <div class="slide_bj">
          <div class="slide"></div>
        </div>
        <i-switch size="large" class="kaiguan" :value="c.isCheck">
          <span slot="open">开启</span>
          <span slot="close">关闭</span>
        </i-switch>
        <div class="edit">
          <img src="../../assets/edit.png" alt="编辑图标" />
          <label for="">编辑</label>
        </div>
      </div>
    </div>
    <el-dialog
      title="添加公司"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="公司名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
         <el-form-item label="公司电话" prop="phoneNumber">
          <el-input v-model="ruleForm.phoneNumber"></el-input>
        </el-form-item>
        <el-form-item label="公司官方" prop="website">
          <el-input v-model="ruleForm.website"></el-input>
        </el-form-item>
        <el-form-item label="活动形式" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
// import { createCipher } from 'crypto';
// @ is an alias to /src
// import ltnav from "@/components/nav.vue";
export default {
  data() {
    return {
      companys: new Array(),
      dialogVisible: false,
      ruleForm: {
        name: "",
        desc: "",
        phoneNumber:"",
        website:"",
      },

      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 2, max: 20, message: "长度在 2 到 20 个字符", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
        phoneNumber: [
          { required: true, message: "请输入", trigger: "blur" },
          { type:'number',message:'电话号码必须为数字' },
          { min: 2, max: 20, message: "长度在 2 到 20 个数字", trigger: "change" }
        ],
      }
    };
  },
  name: "home",
  // components: {
  //   ltnav
  // }
  created() {
    //调用后台数据

    for (var i = 0; i < 8; i++) {
      var company = { name: "公司名称" + (i + 1), isCheck: true };
      console.log(this.companys.push(company));
    }
  },
  methods: {
    test() {
      alert(1);
    }
  }
};
</script>
<style lang="scss" scoped>
.ivu-switch-checked {
  background-color: #42c88b;
  border-color: #42c88b;
}
.row_search {
  margin-top: 20px;
}
.search {
  float: left;
  div {
    height: 36px;
    line-height: 36px;
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
  height: 36px;
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
  padding-left: 14px;
  padding-right: 14px;
  border-radius: 4px;
  margin-left: 30px;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    height: 18px;
    padding-right: 5px;
    cursor: pointer;
  }

  label {
    text-align: center;
    line-height: 36px;
    color: #5867dd;
    font-family: "	Source Han Sans CN";
    font-weight: 600;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             cursor: pointer;
    font-size: 14px;
  }
}
.card {
  width: 23.96%;
  height: 284px;
  background-color: white;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  margin-top: 20px;
  position: relative;
}
.delete {
  float: right;
  position: absolute;
  top: 20px;
  right: 20px;
}
.show {
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  label {
    line-height: 40px;
    padding-left: 10px;
    font-size: 14px;
    font-weight: 400px;
  }
}
p {
  font-size: 16px;
  font-weight: bolder;
  padding-left: 20px;
  margin-top: 16px;
  margin-bottom: 12px;
}
.slide {
  width: 384px;
  height: 1px;
  background-color: #d9d9d9;
  margin: 0 auto;
  margin-top: 14px;
}
.kaiguan {
  position: relative;
  top: 16px;
  left: 20px;
}
.edit {
  height: 16px;
  position: absolute;
  right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  label {
    font-size: 16px;
    padding-left: 4px;
    font-weight: 600;
  }
}
.row_card {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>