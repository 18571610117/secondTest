/*
 * @Description: 基础配置
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2021-06-16 18:11:58
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import http from './utils/request';
import URLS from './api/index.js';
import moment from 'moment';
import _ from 'lodash';
import Local from './utils/local';
import Session from './utils/session';
/* element 组件库 */
import './styles/index.less';
import './utils/element';
import 'element-ui/lib/theme-chalk/index.css';

// 加载echarts，注意引入文件的路径==全局引入echart
import echarts from "./utils/echarts";
// Vue.use(echarts);
Vue.prototype.$echarts = echarts

// 数据存储
let session = new Session();
let local = new Local();
/* 挂载全局对象 */
Vue.config.productionTip = false;
Vue.prototype.$moment = moment; // 时间处理，参考地址：http://momentjs.cn/
Vue.prototype.$bus = new Vue(); // vue实例
Vue.prototype.$urls = URLS; // 统一URL
Vue.prototype.$_ = _; // 专业处理数据库，参考地址：https://www.lodashjs.com/
Vue.prototype.$http = http; // 统一请求
Vue.prototype.$session = session; // Session级别存储，提供set/get
Vue.prototype.$local = local; // Local级别存储，提供set/get

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
