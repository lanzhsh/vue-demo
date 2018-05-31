// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import echarts from 'echarts'
import axios from 'axios'
import store from './store'

//富文本编辑
import '../static/UE/ueditor.config.js'
import '../static/UE/ueditor.all.min.js'
import '../static/UE/lang/zh-cn/zh-cn.js'
import '../static/UE/ueditor.parse.min.js'

Vue.use(ElementUI);

Vue.prototype.$echarts=echarts;

//设置axios拦截器
axios.interceptors.request.use(config => {
  config.headers.cityCode = window.sessionStorage.cityCode //jsCookie.get('cityCode')
  return config
});
axios.interceptors.response.use((response) =>{
  //处理data
  return response;
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
