/*
 * @Description: 配置中心
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2021-06-17 19:05:30
 * @LastEditors: Please set LastEditors
 */
module.exports = {
  publicPath: './',
  productionSourceMap: false,
  outputDir: 'dist', //build输出目录
  assetsDir: 'assets', //静态资源目录（js, css, img）
  lintOnSave: false, //是否开启eslint
  devServer: {
    hot: true,
    https: false,
    hotOnly: false,
    proxy: {
      // 线上专用
      '/': {
        target: '/', //测试
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
