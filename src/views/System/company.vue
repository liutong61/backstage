<template>
  <div class="company">
    <div class="row_search clearfix">
      <el-input type="text" style="width: 360px;padding-left: 0px;"  placeholder="请输入需要查询的公司名称" v-model="search"  class="search_content">
        <el-button style="background-color: #374AFB; color: #fff;border-radius: inherit;" slot="append" type="primary" icon="el-icon-search">搜索</el-button>
      </el-input>
      <div class="add" @click="dialogVisible = true">
        <img src="../../assets/tianjia.png" alt="添加公司图标" />
        <label for>添加公司</label>
      </div>
    </div>
    <div class="row_card">
      <div class="card" v-for="c in companys" :key="c.name">
        <p>{{ c.name }}</p>
        <!-- <el-button style="top: 10px;right: 15px;" type="danger" icon="el-icon-delete" class="delete" @click="companyDelete" size="mini" circle></el-button> -->
        <img src="../../assets/del.png" alt class="delete"  @click="companyDelete" />
        <div class="show">
          <img src="../../assets/phone_number.png" alt="公司电话图标" />
          <label for>公司电话：0752-2616166</label>
        </div>
        <div class="show">
          <img src="../../assets/index.png" alt="官网图标" />
          <label for>公司官网：wwww.goldingmedia.com</label>
        </div>
        <div class="show">
          <img src="../../assets/beizhu.png" alt="备注图标" />
          <label for>备注：</label>
        </div>
        <div class="show">
          <img src="../../assets/time.png" alt="时间图标" />
          <label for>注册时间：2019-5-20</label>
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
          <label for>编辑</label>
        </div>
      </div>
    </div>
    <el-dialog title="添加公司" :visible.sync="dialogVisible" width="35%">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="公司名称" prop="name">
          <el-input
            v-model="ruleForm.name"
            placeholder="请输入公司名称"
            maxlength="20"
            minlength="2"
            show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item label="公司电话" prop="phoneNumber">
          <el-input v-model="ruleForm.phoneNumber" placeholder="请输入公司电话"></el-input>
        </el-form-item>
        <el-form-item label="公司官网" prop="website">
          <el-input v-model="ruleForm.website" placeholder="请输入公司官网">
            <template slot="prepend">Http://</template>
          </el-input>
        </el-form-item>
        <el-form-item label="活动形式" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc" placeholder="请输入活动形式"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
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
    var validPhone = (rule, value, callback) => {
      const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
      if (!value) {
        callback(new Error("请输入电话号码"));
      } else if (!reg.test(value)) {
        callback(new Error("请输入正确的11位手机号码"));
      } else {
        callback();
      }
    };
    return {
      companys: new Array(),
      search:"",
      dialogVisible: false,
      ruleForm: {
        name: "",
        desc: "",
        phoneNumber: "",
        website: ""
      },

      rules: {
        name: [
          { required: true, message: "请输入公司名称", trigger: "blur" },
          {
            min: 2,
            max: 20,
            message: "长度在 2 到 20 个字符",
            trigger: "change"
          }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
        phoneNumber: [
          { required: true, message: "请输入电话号码", trigger: "blur" },
          // { type: 'number', message: "电话号码必须为数字" },
          { required: true, trigger: "change", validator: validPhone },
          {
            min: 2,
            max: 20,
            message: "长度在 2 到 20 个数字",
            trigger: "change"
          }
        ]
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
    companyDelete() {
      this.$confirm("此操作将永久删除该公司, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          //取消删除
        });
    },
    test() {
      alert(1);
    }
  }
};
</script>
<style lang="scss" scoped>
.company{
  margin-bottom: 50px;
}
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
  // border: 1px solid #c8cccf;
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
  cursor: pointer;
  
}
.delete:active{
  animation-name: fangda;
  animation-duration: 1s;
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