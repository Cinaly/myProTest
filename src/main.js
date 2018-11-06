// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import vuexI18n from 'vuex-i18n'


import utils from './common/utils'

Vue.prototype.$utils=utils;
Vue.config.productionTip = false;
Vue.use(Vuex);

const store=new Vuex.Store({
  modules:{
    i18n:vuexI18n
  }
});
Vue.use(vuexI18n.plugin,store);
Vue.i18n.add('en',require('./assets/json/i18n/en.json'));
Vue.i18n.add('tr',require('./assets/json/i18n/tr.json'));
Vue.i18n.add('tw',require('./assets/json/i18n/tw.json'));



Vue.i18n.set('tw');
/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
