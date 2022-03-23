<!--
 * @Description: app
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2021-07-29 16:59:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-09 19:28:48
-->
<template>
  <div id="app">
    <div class="menuTitle">
      <el-menu
        default-active="1-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="1-1" @click="goRoute(1)">柱状图</el-menu-item>
        <el-menu-item index="1-2" @click="goRoute(2)">折线图</el-menu-item>
        <el-menu-item index="1-3" @click="goRoute(3)">饼图</el-menu-item>
        <el-menu-item index="1-4" @click="goRoute(4)">漏斗图</el-menu-item>
        <el-menu-item index="1-5" @click="goRoute(5)">双轴图</el-menu-item>
        <el-menu-item index="1-6" @click="goRoute(6)">预算总览图</el-menu-item>
      </el-menu>
    </div>
    <router-view class="mainContent" />
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {};
  },
  methods: {
    goRoute(e) {
      if (e == 1) {
        this.$router.push({ path: '/columnar' });
      }
      if (e == 2) {
        this.$router.push({ path: '/polygonal' });
      }
      if (e == 3) {
        this.$router.push({ path: '/pancake' });
      }
      if (e == 4) {
        this.$router.push({ path: '/funnel' });
      }
      if (e == 5) {
        this.$router.push({ path: '/doubleLine' });
      }
      if (e == 6) {
        this.$router.push({ path: '/budget' });
      }
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="less">
#app {
  display: flex;
  .menuTitle {
    width: 280px;
    border-right: 1px solid #e8e8e8;
    min-height: 600px;
    padding: 10px 0;
  }
  .el-menu {
    border-right: 0;
    .el-menu-item.is-active {
      background: #e6f7ff;
    }
    .el-menu-item,
    .el-submenu__title {
      height: 48px;
      line-height: 48px;
    }
  }

  .mainContent {
    overflow: auto;
    flex: 1;
    background: white;
  }
}
</style>
