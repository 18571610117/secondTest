/*
 * @Description: 
 * @Version: 2.0
 * @Autor: wlg
 * @Date: 2021-09-06 21:53:07
 * @LastEditors: 
 * @LastEditTime: 2021-09-09 14:04:21
 */
// 文件路径 @/lib/echarts.js 自行配置

// 加载echarts，注意引入文件的路径
import echarts from 'echarts/lib/echarts';

// 再引入你需要使用的图表类型，标题，提示信息等
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
// import 'echarts/lib/component/toolbox';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/funnel';
export default echarts;
