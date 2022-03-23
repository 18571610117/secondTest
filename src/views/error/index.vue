<!--
 * @Description: 404页面
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2021-08-11 09:59:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-06 22:21:57
-->
<template>
  <div class="e-error">
    <div class="r-img">
      <div class="g-row1"></div>
      <div class="g-row2">对不起，你访问的页面出现错误～</div>
      <div class="g-row3">
        <el-button type="primary" @click="$router.go(-1)">
          返回上一页</el-button
        >
      </div>
    </div>
  </div>
</template>

<style lang="less">
.e-error {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .g-row1 {
    background-image: url('../../assets/imgs/404.png');
    background-size: 100%;
    width: 308px;
    height: 230px;
  }
  .g-row2 {
    text-align: center;
    font-size: 16px;
    color: #666666;
    font-weight: bold;
    margin-top: 44px;
  }
  .g-row3 {
    margin-top: 60px;
    text-align: center;
    .ant-btn {
      width: 107px;
    }
  }
}
</style>
