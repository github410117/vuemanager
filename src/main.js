// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


//引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//引入http库
import api from './utility/http/index'

//引入Store
import store from './store'

//引入缓存检查
import vuexCheck from './store/check'



//缓存检查赋值
vuexCheck(store)


Vue.use(api)
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
