<template>
  <div class="home">
    <div class="header_background">
      <div class="header_center">
        <div class="header_up">
          <div class="header_left">
            <img src="../assets/logo.png" alt="logo" />
            <h1>您好，超级管理员，欢迎来到金鼎云平台！</h1>
          </div>
          <div class="header_right">
            <div class="tubiao">
              <img src="../assets/tuichu.png" alt="退出登录图标" />
              <label>退出登录</label>
            </div>
            <div class="tubiao">
              <img src="../assets/women.png" alt="关于我们图标" />
              <label>关于我们</label>
            </div>
            <div class="tubiao">
              <img src="../assets/jiaocheng.png" alt="在线教程图标" />
              <label>在线教程</label>
            </div>
          </div>
        </div>
        <div class="header_down">
          <div class="gongneng">
            <!-- 一个 -->
            <div
              @mouseenter="mouseenter(index)"
              @mouseleave="mouseleave"
              @click.stop="myClick(index, menu.path, -1)"
              class="shouye"
              v-bind:class="{ BL: newActivenNmber == index }"
              v-for="(menu, index) in menuList"
              :key="menu.name"
            >
              <img
                :src="require('../assets/' + menu.icon + '.png')"
                alt="首页图标"
              />
              <label>{{ menu.name }}</label>
              <div class="rotate_icon" v-if="menu.child.length > 0">
                <img src="../assets/xiala.png" alt="下拉按钮" />
              </div>
              <template v-if="menu.child.length > 0">
                <transition name="el-zoom-in-top">
                  <div class="touming" v-if="hoverNum == index" :myid="index">
                    <div class="xiala">
                      <img src="../assets/sanjiao.png" />
                      <ul>
                        <template v-for="(menuChild, cindex) in menu.child">
                          <li
                            @click.stop="myClick(index, menuChild.path, cindex)"
                            :key="menuChild.name"
                          >
                            {{ menuChild.name }}
                          </li>
                        </template>
                      </ul>
                    </div>
                  </div>
                </transition>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="title_bj">
      <div class="title">
        <h4>{{ activeTitle }}</h4>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      activeTitle: "",
      newActivenNmber: 0,
      activenNmber: 0,
      childActivenNmber: 0,
      hoverNum: -1,
      menuList: []
    };
  },
  created() {
    //假设，这里是调取后台接口 获取数据
    this.menuList = [
      {
        name: "首页",
        path: "",
        icon: "shouye",
        child: []
      },
      {
        name: "物联网卡",
        path: "internetCard",
        icon: "wangka",
        child: []
      },
      {
        name: "设备管理",
        path: "equipment",
        icon: "shebei",
        child: [
          {
            name: "交通工具配置",
            path: "traffic"
          },
          {
            name: "主机设备查询",
            path: "host"
          },
          {
            name: "屏端设备查询",
            path: "screen"
          }
        ]
      },
      {
        name: "系统管理",
        path: "system",
        icon: "xitong",
        child: [
          {
            name: "公司管理",
            path: "company"
          },
          {
            name: "用户管理",
            path: "user"
          },
          {
            name: "角色管理",
            path: "role"
          }
        ]
      },
      {
        name: "媒体与资源",
        path: "media",
        icon: "meiti",
        child: [
          {
            name: "新增资源推送",
            path: "resourceAdd"
          },
          {
            name: "在线资源操作",
            path: "resourceOnline"
          },
          {
            name: "资源编辑管理",
            path: "resourceEdit"
          }
        ]
      },
      {
        name: "数据中心",
        path: "media",
        icon: "meiti",
        child: [
          {
            name: "交通数据展示",
            path: "trafficDate"
          },
          {
            name: "单主机统计",
            path: "hostDate"
          },
          {
            name: "单屏端统计",
            path: "screenDate"
          },
          {
            name: "广告投放效果",
            path: "advertPut"
          },
          {
            name: "广告分析统计",
            path: "advertAnalysis"
          },
          {
            name: "GPS轨迹系统",
            path: "gps"
          },
          {
            name: "在线支付",
            path: "onlinePayment"
          },
          {
            name: "用户画像",
            path: "userPortrait"
          },
          {
            name: "系统日志",
            path: "systemLog"
          },
          {
            name: "设备日志",
            path: "equipmentLog"
          },
          {
            name: "e在线",
            path: "eOnline"
          }
        ]
      },
      {
        name: "媒体资源运维",
        path: "operation",
        icon: "meiti",
        child: [
          {
            name: "电影电视剧",
            path: "film"
          },
          {
            name: "电子阅读",
            path: "eBook"
          },
          {
            name: "游戏",
            path: "game"
          },
          {
            name: "音乐MV",
            path: "music"
          },
          {
            name: "综艺",
            path: "variety"
          }
        ]
      },
      {
        name: "报表管理",
        path: "report",
        icon: "baobiao",
        child: [
          {
            name: "设备运维报表",
            path: "equipmentReport"
          },
          {
            name: "广告运维报表",
            path: "advertReport"
          },
          {
            name: "支付报表",
            path: "paymentReport"
          },
          {
            name: "媒体资源运维报表",
            path: "mediaReport"
          },
          {
            name: "游戏运维报表",
            path: "gameReport"
          }
        ]
      }
    ];
  },
  methods: {
    myClick(index, path, cindex) {
      if (cindex != null) {
        index = index + "_" + cindex;
      }
      this.activenNmber = index;
      this.newActivenNmber = index.split("_")[0];
      this.$router.push({ path: "/" + path, query: { index: index } });
    },
    mouseenter(index) {
      this.hoverNum = index;
    },
    mouseleave() {
      this.hoverNum = -1;
    }
  },
  mounted() {
    if (typeof this.$route.query.index != "undefined") {
      this.activenNmber = this.$route.query.index;
      this.newActivenNmber = this.$route.query.index.split("_")[0];
    } else {
      this.activenNmber = 0;
      this.activeTitle = this.menuList[this.activenNmber].name;
    }
  },
  watch: {
    // 如果 `activenNmber` 发生改变，这个函数就会运行
    activenNmber: function(newValue) {
      console.log("newValue:" + newValue);
      let p = 0;
      let c = 0;
      let str = newValue.split("_");
      p = str[0];
      if (str.length > 1) {
        c = str[1];
      }
      console.log("p:" + p);
      console.log("c:" + c);
      if (this.menuList[p].child.length > 0 && c != -1) {
        this.activeTitle = this.menuList[p].child[c].name;
      } else {
        this.activeTitle = this.menuList[p].name;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.BL {
  background-color: #374afb !important;
}
h1{
  line-height: 40px;
}
.header_background {
  background-color: #1f1e2e;
  width: 100%;
  height: 180px;
}
.header_center {
  // width: 1640px;
  max-width: 84%;
  position: relative;
  margin: 0 auto;
}
.header_up {
  display: flex;
  padding-top: 14px;
  justify-content: space-between;
}
.header_left {
  display: flex;
  flex-flow: row;
  // width: 1640px;
  img {
    height: 55px;
  }
  h1 {
    width: 300px;
  }
}
h1 {
  color: white;
  font-size: 14px;
  margin-left: 56px;
  font-weight: 400;
}
.header_right {
  display: flex;
  flex-flow: row-reverse;
  // width: 1640px;
  align-items: flex-start;
}
.tubiao {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 38px;
}
label {
  color: white;
  font-size: 14px;
  margin-left: 4px;
  font-weight: 400;
  padding: 0px;
}
.header_down {
  display: flex;
  flex-flow: row;
  align-items: center;
}
.shouye {
  cursor: pointer;
  flex-flow: row;
  display: flex;
  align-items: center;
  margin-left: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 6px;
  padding-top: 6px;
  border-radius: 4px;
  position: relative;
  margin-top: 10px;
}
.rotate_icon {
  padding-left: 6px;
  cursor: pointer;
}
.shouye:nth-child(1) {
  margin-left: 0px;
}
a {
  text-decoration: none;
}
.gongneng {
  display: flex;
  flex-flow: row;
  padding-bottom: 50px;
  padding-top: 14px;
  cursor: pointer;
}
.shouye:hover {
  background-color: #343657;
  .rotate_icon img {
    transform: rotate(0deg);
  }
}
.rotate_icon img {
  transition: all 0.5s;
  transform: rotate(-180deg);
}
ul,
li {
  text-decoration: none;
}
.touming {
  padding: 30px 0px;
  width: 140px;
  display: block;
  position: absolute;
  top: 25px;
  left: 0;
  z-index: 20;
}
.xiala {
  box-shadow: 3px 3px 3px #e1e1e1;
  position: absolute;
  left: -4px;
  z-index: 21;
  border-radius: 4px;
  ul {
    background: white;
    width: 200px;
    border-radius: 4px;
    overflow: hidden;
    padding-top: 14px;
    padding-bottom: 14px;
  }
  img {
    position: absolute;
    top: -8px;
    left: 34px;
    z-index: 22;
  }
  li {
    padding-bottom: 14px;
    padding-top: 14px;
    padding-left: 30px;
    font-size: 14px;
    font-weight: 400px;
  }
}
li:hover {
  background-color: #f8f8fb;
  color: #374afb;
  font-weight: 600px;
}
.title {
  background-color: white;
  width: 84%;
  position: absolute;
  top: 152px;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 4px;
  h4 {
    color: black;
    font-size: 16px;
    padding-left: 20px;
    font-weight: 600;
    line-height: 50px;
  }
}
.title_bj{
  width: 100%;
  height: 25px;
}
</style>