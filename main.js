import App from './App'
import store from 'store/index.js'
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
import uView from "uview-ui";

Vue.use(uView);
import MyComp from 'components/box.vue'
Vue.component('box',MyComp)
import MyCompmin from 'components/boxmin.vue'
Vue.component('boxmin',MyCompmin)
import MyFind from 'components/find.vue'
Vue.component('find',MyFind)
import Myblodbox from 'components/blodbox.vue'
Vue.component('blodbox',Myblodbox)
import Myactive from 'components/active.vue'
Vue.component('active',Myactive)
//去除警告信息
//Vue.config.silent = true
import {request} from './util/api.js'
Vue.prototype.$request=request
 App.mpType = 'app'
const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif