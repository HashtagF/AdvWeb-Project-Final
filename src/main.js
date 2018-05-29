// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import { store } from './store/store'
import VueSweetalert2 from 'vue-sweetalert2'
import SocialSharing from 'vue-social-sharing'

Vue.use(SocialSharing)
Vue.use(VueSweetalert2)
Vue.use(Vuex)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
