// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'swiper/dist/css/swiper.css'
import prompt from './plugins/prompt';
// import vConsole from 'vconsole'
// new vConsole();

Vue.config.productionTip = false;
Vue.use(prompt);

/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
