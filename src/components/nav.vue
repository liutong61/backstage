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
            <div @mouseenter="mouseenter(index)" @mouseleave="mouseleave"  @click="test(index)" class="shouye" v-bind:class="{ BL: activenNmber == index }" v-for="(menu,index) in menuList" :key="menu.name">
              <img :src='require("../assets/"+menu.icon+".png")' alt="首页图标" />
              <router-link :to="menu.path">
                <label>{{ menu.name }}</label>
              </router-link>
              <template v-if="menu.child.length > 0">
                <transition name="el-zoom-in-top">
                  <div class="touming" v-if="hoverNum == index" :myid = "index" >
                    <div class="xiala">
                      <img src="../assets/sanjiao.png" />
                      <ul>
                        <li v-for="menuChild in menu.child" :key="menuChild.name">{{ menuChild.name }}</li>
                      </ul>
                    </div>
                  </div>
                </transition>
              </template>
            </div>
            <!-- <div class="shouye">
              <img src="../assets/shouye.png" alt="首页图标" />
              <router-link to="/">
                <label>首页</label>
              </router-link>
            </div>
            <div class="shouye" v-link="{path: '/v2wangka'}">
              <router-link to="2wangka">
                <img src="../assets/wangka.png" alt="首页图标" />
                <label>物联网卡</label>
              </router-link>
            </div>
            <div class="shouye">
              <img src="../assets/shebei.png" alt="首页图标" />
              <router-link to="3shebei">
                <label>设备管理</label>
              </router-link>
              <div class="touming">
                <div class="xiala">
                  <img src="../assets/sanjiao.png" />
                  <ul>
                    <li>交通工具配置</li>
                    <li>主机设备查询</li>
                    <li>屏端设备查询</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="shouye">
              <img src="../assets/xitong.png" alt="首页图标" />
              <router-link to="4xitong">
                <label>系统管理</label>
              </router-link>
              <div class="touming">
                <div class="xiala">
                  <img src="../assets/sanjiao.png" />
                  <ul>
                    <li>公司管理</li>
                    <li>用户管理</li>
                    <li>角色管理</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="shouye">
              <img src="../assets/meiti.png" alt="首页图标" />
              <router-link to="5meiti">
                <label>媒体与资源</label>
              </router-link>
              <div class="touming">
                <div class="xiala">
                  <img src="../assets/sanjiao.png" />
                  <ul>
                    <li>新增资源推送</li>
                    <li>在线资源操作</li>
                    <li>资源编辑管理</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="shouye">
              <img src="../assets/shuju.png" alt="首页图标" />
              <router-link to="6shuju">
                <label>数据中心</label>
              </router-link>
              <div class="touming">
                <div class="xiala">
                  <img src="../assets/sanjiao.png" />
                  <ul>
                    <li>交通数据展示</li>
                    <li>单主机统计</li>
                    <li>单屏端统计</li>
                    <li>广告投放效果</li>
                    <li>广告分析统计</li>
                    <li>GPS轨迹系统</li>
                    <li>在线支付</li>
                    <li>用户画像</li>
                    <li>系统日志</li>
                    <li>设备日志</li>
                    <li>e-在线</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="shouye">
              <img src="../assets/shuju.png" alt="首页图标" />
              <router-link to="6shuju">
                <label>媒体资源运维</label>
              </router-link>
              <div class="touming">
                <div class="xiala">
                  <img src="../assets/sanjiao.png" />
                  <ul>
                    <li>电影电视剧</li>
                    <li>电子阅读</li>
                    <li>游戏</li>
                    <li>音乐MV</li>
                    <li>综艺</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="shouye">
              <img src="../assets/baobiao.png" alt="首页图标" />
              <router-link to="7baobiao">
                <label>报表管理</label>
              </router-link>
              <div class="touming">
                <div class="xiala">
                  <img src="../assets/sanjiao.png" />
                  <ul>
                    <li>设备运维报表</li>
                    <li>广告运维报表</li>
                    <li>支付报表</li>
                    <li>媒体资源运维报表</li>
                    <li>游戏运维报表</li>
                  </ul>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      activenNmber:0,
      hoverNum:-1,
      menuList: []
    }
  },created(){
    //假设，这里是调取后台接口 获取数据
    this.menuList = [
        {
          name: '首页',
          path: '/',
          icon: 'shouye',
          child:[]
        },
        {
          name: '物联网卡',
          path: '/2wangka',
          icon: 'wangka',
          child:[]
        },
        {
          name: '设备管理',
          path: '/3shebei',
          icon: 'shuju',
          child:[
            {
              name: '交通工具配置',
              path: '/3.1jiaotong'
            },
            {
              name: '主机设备查询',
              path: '/3.2zhuji'
            },
            {
              name: '屏端设备查询',
              path: '/3.3pingduan'
            }
          ]
        },
        {
          name: '系统管理',
          path: '/4.1gongsi',
          icon: 'xitong',
          child:[
            {
              name: '公司管理',
              path: '/4.1gongsi'
            },
            {
              name: '用户管理',
              path: '/4.2yonghu'
            },
            {
              name: '角色管理',
              path: '/4.3juese'
            }
          ]
        },
        {
          name: '媒体与资源',
          path: '/5.1xinzeng',
          icon: 'meiti',
          child:[
            {
              name: '新增资源推送',
              path: '/5.1xinzeng'
            },
            {
              name: '在线资源操作',
              path: '/5.2zaixian'
            },
            {
              name: '资源编辑管理',
              path: '/5.3ziyuancaozuo'
            }
          ]
        },
      ]
  },methods:{
    test(index){
      this.activenNmber = index
    },
    mouseenter(index){
      this.hoverNum = index
    },
    mouseleave(){
      this.hoverNum = -1
    }
  }
};
</script>
<style lang="scss">
.BL{
  background-color: #374afb !important;
}
.header_background {
  background-color: #1f1e2e;
  width: 100%;
  height: 168px;
}
.header_center {
  // width: 1640px;
  max-width: 1640px;
  padding: 0px 20px;
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
  margin-top: 10px;
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
  flex-flow: row;
  display: flex;
  align-items: center;
  margin-left: 40px;

  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 6px;
  padding-top: 6px;
  border-radius: 4px;
  position: relative;
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
}
.shouye:hover {
  background-color: #343657;
  
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
</style>