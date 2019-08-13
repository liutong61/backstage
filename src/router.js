import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/1Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/2wangka',
      name: '2wangka',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/2wangka.vue')
    },
    {
      path: '/3.0shebei',
      name: '3.0shebei',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/3.0shebei.vue')
    },
    {
      path: '/3.1jiaotong',
      name: '3.1jiaotong',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/3.1jiaotong.vue')
    },
    {
      path: '/3.2zhuji',
      name: '3.2zhuji',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/3.2zhuji.vue')
    },
    {
      path: '/3.3pingduan',
      name: '3.3pingduan',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/3.3pingduan.vue')
    },
    {
      path: '/4.0xitong',
      name: '4.0xitong',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/4.0xitong.vue')
    },
    {
      path: '/4.1gongsi',
      name: '4.1gongsi',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/4.1gongsi.vue')
    },
    {
      path: '/4.2userM',
      name: '4.2userM',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/4.2userM.vue')
    },
    {
      path: '/4.3juese',
      name: '4.3juese',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/4.3juese.vue')
    },
    {
      path: '/5.1xinzeng',
      name: '5.1xinzeng',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/5.1xinzeng.vue')
    },
    {
      path: '/5.2zaixian',
      name: '5.2zaixian',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/5.2zaixian.vue')
    },
    {
      path: '/5.3ziyuancaozuo',
      name: '5.3ziyuancaozuo',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/5.3ziyuancaozuo.vue')
    },
    {
      path: '/6.0shuju',
      name: '6.0shuju',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/6.0shuju.vue')
    },
    {
      path: '/6.1zhanshi',
      name: '6.1zhanshi',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/6.1zhanshi.vue')
    },
    {
      path: '/6.2danzhu',
      name: '6.2danzhu',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/6.2danzhu.vue')
    },
    {
      path: '/6.3danping',
      name: '6.3danping',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/6.3danping.vue')
    },
    {
      path: '/6.4toufang',
      name: '6.4toufang',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/6.4toufang.vue')
    },
    {
      path: '/6.5fenxi',
      name: '6.5fenxi',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/6.5fenxi.vue')
    },
    {
      path: '/6.6gps',
      name: '6.6gps',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/6.6gps.vue')
    },
    {
      path: '/6.7zhifu',
      name: '6.7zhifu',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/6.7zhifu.vue')
    },
    {
      path: '/6.8huaxiang',
      name: '6.8huaxiang',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/6.8huaxiang.vue')
    },
    {
      path: '/6.9xitongrizhi',
      name: '6.9xitongrizhi',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/6.9xitongrizhi.vue')
    },
    {
      path: '/6.10shebeirizhi',
      name: '6.10shebeirizhi',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/6.10shebeirizhi.vue')
    },
    {
      path: '/6.11e',
      name: '6.11e',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/6.11e.vue')
    },
    {
      path: '/7.1shebeiyunwei.vue',
      name: '7.1shebeiyunwei',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/7.1shebeiyunwei.vue')
    },
    {
      path: '/7.2guanggaoyunwei.vue',
      name: '7.1shebeiyunwei',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/7.1shebeiyunwei.vue')
    },
    {
      path: '/7baobiao',
      name: '7baobiao',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/7baobiao.vue')
    },

  ]
})
