import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Layout from './views/layout/Layout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: '/',
      component: Layout,
      children: [
        {
          path: '/:index',
          component: Home,
        },
        {
          path: '/internetCard/:index',
          name: 'internetCard',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/internetCard.vue')
        },
        {
          path: '/equipment/:index',
          name: 'equipment',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/Equipment/equipment.vue')
        },
        {
          path: '/traffic/:index',
          name: 'traffic',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/Equipment/traffic.vue')
        },
        {
          path: '/host/:index',
          name: 'host',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/Equipment/host.vue')
        },
        {
          path: '/screen/:index',
          name: 'screen',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/Equipment/screen.vue')
        },
        {
          path: '/system/:index',
          name: 'system',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/System/system.vue')
        },
        {
          path: '/company/:index',
          name: 'company',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/System/company.vue')
        },
        {
          path: '/user/:index',
          name: 'user',
          component: () => import( './views/System/user.vue')
        },
        {
          path: '/role/:index',
          name: 'role',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/System/role.vue')
        },
        {
          path: '/resourceAdd/:index',
          name: 'resourceAdd',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/Media/resourceAdd.vue')
        },
        {
          path: '/resourceOnline/:index',
          name: 'resourceOnline',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/Media/resourceOnline.vue')
        },
        {
          path: '/resourceEdit/:index',
          name: 'resourceEdit',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/Media/resourceEdit.vue')
        },
        {
          path: '/advertAnalysis/:index',
          name: 'advertAnalysis',
          component: () => import('./views/Date/advertAnalysis.vue')
        },
        {
          path: '/advertPut/:index',
          name: 'advertPut',
          component: () => import('./views/Date/advertPut.vue')
        },
        {
          path: '/date/:index',
          name: 'date',
          component: () => import('./views/Date/date.vue')
        },
        {
          path: '/equipmentLog/:index',
          name: 'equipmentLog',
          component: () => import('./views/Date/equipmentLog.vue')
        },
        {
          path: '/gps/:index',
          name: 'gps',
          component: () => import('./views/Date/gps.vue')
        },
        {
          path: '/hostDate/:index',
          name: 'hostDate',
          component: () => import('./views/Date/hostDate.vue')
        },
        {
          path: '/screenDate/:index',
          name: 'screenDate',
          component: () => import('./views/Date/screenDate.vue')
        },
        {
          path: '/onlinePayment/:index',
          name: 'onlinePayment',
          component: () => import('./views/Date/onlinePayment.vue')
        },
        {
          path: '/systemLog/:index',
          name: 'systemLog',
          component: () => import('./views/Date/systemLog.vue')
        },
        {
          path: '/trafficDate/:index',
          name: 'trafficDate',
          component: () => import('./views/Date/trafficDate.vue')
        },
        {
          path: 'userPortrait/:index',
          name: 'userPortrait',
          component: () => import('./views/Date/userPortrait.vue')
        },
        {
          path: '/eOnline/:index',
          name: 'eOnline',
          component: () => import('./views/Date/eOnline.vue')
        },
        {
          path: '/report/:index',
          name: 'report',
          component: () => import('./views/Report/report.vue')
        },
        {
          path: '/advertReport/:index',
          name: 'advertReport',
          component: () => import('./views/Report/advertReport.vue')
        },
        {
          path: '/equipmentReport/:index',
          name: 'equipmentReport',
          component: () => import( './views/Report/equipmentReport.vue')
        },
        {
          path: '/mediaReport/:index',
          name: 'mediaReport',
          component: () => import('./views/Report/mediaReport.vue')
        },
        {
          path: '/gameReport/:index',
          name: 'gameReport',
          component: () => import( './views/Report/gameReport.vue')
        },
        {
          path: '/paymentReport/:index',
          name: 'paymentReport',
          component: () => import( './views/Report/paymentReport.vue')
        },
      ]
    },
  ]
})
