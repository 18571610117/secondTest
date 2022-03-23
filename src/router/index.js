/*
 * @Description:
 * @Version: 2.0
 * @Autor: wlg
 * @Date: 2021-07-22 08:56:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-10 09:27:19
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/columnar',
    //指向@/views/echats_demo/index.vue==本项目柱状图
    component: (resolve) => require(['@/views/index.vue'], resolve),
  },
  {
    path: '*',
    name: 'notfount',
    meta: {
      status: true,
    },
    component: (resolve) => require(['@/views/error/index.vue'], resolve), // 统一404页面拦截
  },
  {
    path: '/columnar',
    name: 'columnar',
    meta: {
      status: true,
    },
    component: (resolve) => require(['@/views/echats_demo/index.vue'], resolve),
  },
  {
    path: '/polygonal',
    name: 'polygonal',
    meta: {
      status: true,
    },
    component: (resolve) =>
      require(['@/views/echats_demo/polygonal.vue'], resolve),
  },
  {
    path: '/pancake',
    name: 'pancake',
    meta: {
      status: true,
    },
    component: (resolve) =>
      require(['@/views/echats_demo/pancake.vue'], resolve),
  },
  {
    path: '/funnel',
    name: 'funnel',
    meta: {
      status: true,
    },
    component: (resolve) =>
      require(['@/views/echats_demo/funnel.vue'], resolve),
  },
  {
    path: '/doubleLine',
    name: 'doubleLine',
    meta: {
      status: true,
    },
    component: (resolve) =>
      require(['@/views/echats_demo/doubleLine.vue'], resolve),
  },
  {
    path: '/budget',
    name: 'budget',
    meta: {
      status: true,
    },
    component: (resolve) =>
      require(['@/views/echats_demo/budget.vue'], resolve),
  }
];

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
    };
  },
});
router.beforeEach((to, from, next) => {
  next();
});
// 以下代码解决路由地址重复的报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
router.afterEach((to, from, next) => {
  document.getElementById('app').scrollTo(0, 0);
});
export default router;
