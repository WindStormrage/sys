// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource'
import VueImgInputer from 'vue-img-inputer'
import 'iview/dist/styles/iview.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.component('VueImgInputer', VueImgInputer)
Vue.use(VueResource)
Vue.use(iView)
Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.http.options.emulateJSON = true//大佬这么写的
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
