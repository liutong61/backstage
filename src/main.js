import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import 'element-ui/lib/theme-chalk/index.css';
import $ from 'jquery'
import './quasar'


Vue.config.productionTip = false
Vue.prototype.$ = $;
Vue.use(ElementUI);
Vue.use(iView)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
