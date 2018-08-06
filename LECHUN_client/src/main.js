// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./css/index.css"
import "../static/fonts/iconfont.css"
import Swiper from 'vue-awesome-swiper'
import store from './store/index'
import "../static/animate.css"
Vue.use(Swiper)

import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
