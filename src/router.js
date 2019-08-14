import Vue from 'vue'
import Router from 'vue-router'
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
          path: '/Home/:index',
          name: 'Home',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
        },
        {
          path: '/internetCard',
          name: 'internetCard',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/internetCard.vue')
        },
        {
          path: '/equipment',
          name: 'equipment',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/Equipment/equipment.vue')
        },
        {
          path: '/traffic',
          name: 'traffic',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/Equipment/traffic.vue')
        },
        {
          path: '/host',
          name: 'host',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/Equipment/host.vue')
        },
        {
          path: '/screen',
          name: 'screen',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/Equipment/screen.vue')
        },
        {
          path: '/system',
          name: 'system',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/System/system.vue')
        },
        {
          path: '/company',
          name: 'company',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/System/company.vue')
        },
        {
          path: '/user',
          name: 'user',
          component: () => import( './views/System/user.vue')
        },
        {
          path: '/role',
          name: 'role',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/System/role.vue')
        },
        {
          path: '/media/:index',
          name: 'media',
          component: () => import( './views/Media/media.vue')
        },
        
        {

          path: '/resourceAdd',
          name: 'resourceAdd',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/Media/resourceAdd.vue')
        },
        {
          path: '/resourceOnline',
          name: 'resourceOnline',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/Media/resourceOnline.vue')
        },
        {
          path: '/resourceEdit',
          name: 'resourceEdit',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/Media/resourceEdit.vue')
        },
        {
          path: '/advertAnalysis',
          name: 'advertAnalysis',
          component: () => import('./views/Date/advertAnalysis.vue')
        },
        {
          path: '/advertPut',
          name: 'advertPut',
          component: () => import('./views/Date/advertPut.vue')
        },
        {
          path: '/date',
          name: 'date',
          component: () => import('./views/Date/date.vue')
        },
        {
          path: '/equipmentLog',
          name: 'equipmentLog',
          component: () => import('./views/Date/equipmentLog.vue')
        },
        {
          path: '/gps',
          name: 'gps',
          component: () => import('./views/Date/gps.vue')
        },
        {
          path: '/hostDate',
          name: 'hostDate',
          component: () => import('./views/Date/hostDate.vue')
        },
        {
          path: '/screenDate',
          name: 'screenDate',
          component: () => import('./views/Date/screenDate.vue')
        },
        {
          path: '/onlinePayment',
          name: 'onlinePayment',
          component: () => import('./views/Date/onlinePayment.vue')
        },
        {
          path: '/systemLog',
          name: 'systemLog',
          component: () => import('./views/Date/systemLog.vue')
        },
        {
          path: '/trafficDate',
          name: 'trafficDate',
          component: () => import('./views/Date/trafficDate.vue')
        },
        {
          path: 'userPortrait',
          name: 'userPortrait',
          component: () => import('./views/Date/userPortrait.vue')
        },
        {
          path: '/eOnline',
          name: 'eOnline',
          component: () => import('./views/Date/eOnline.vue')
        },
        {
          path: '/report',
          name: 'report',
          component: () => import('./views/Report/report.vue')
        },
        {
          path: '/advertReport',
          name: 'advertReport',
          component: () => import('./views/Report/advertReport.vue')
        },
        {
          path: '/equipmentReport',
          name: 'equipmentReport',
          component: () => import( './views/Report/equipmentReport.vue')
        },
        {
          path: '/mediaReport',
          name: 'mediaReport',
          component: () => import('./views/Report/mediaReport.vue')
        },
        {
          path: '/gameReport',
          name: 'gameReport',
          component: () => import( './views/Report/gameReport.vue')
        },
        {
          path: '/paymentReport',
          name: 'paymentReport',
          component: () => import( './views/Report/paymentReport.vue')
        },
        {
          path: '/operation/:index',
          name: 'operation',
          component: () => import( './views/Operation/operation.vue')
        },
        {
          path: '/eBook/:index',
          name: 'eBook',
          component: () => import( './views/Operation/eBook.vue')
        },
        {
          path: '/film/:index',
          name: 'film',
          component: () => import( './views/Operation/film.vue')
        },
        {
          path: '/game/:index',
          name: 'game',
          component: () => import( './views/Operation/game.vue')
        },
        {
          path: '/music/:index',
          name: 'music',
          component: () => import( './views/Operation/music.vue')
        },
        {
          path: '/variety/:index',
          name: 'variety',
          component: () => import( './views/Operation/variety.vue')
        },
      ]
    },
  ]
})
