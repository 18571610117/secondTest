<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: wlg
 * @Date: 2021-09-07 19:44:53
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-09 15:25:22
-->
<template>
  <div class="echats-demo">
    <div class="o-echats">
      <div class="o-item">
        <div class="o-chart" id="quarter_num"></div>
      </div>
      <el-button style="margin-left:10px" @click="changeDemo">赋值</el-button>
      <el-button @click="clearDemo">清空</el-button>
    </div>
  </div>
</template>
<script>
import echarts from '@/utils/echarts';
export default {
  data() {
    return {
      //折线图参数样式
      option_num: {
        title: {
            text: '折线图堆叠',
            subtext: '模拟数据'
        },
        legend: {
          data: ['财务','业务','产品','研发','管理']
        },
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: []
        },
        yAxis: {
            type: 'value',
            axisLine: {
              show: false
            }
        },
        series: [
            {
              name: '财务',
              type: 'line',
              color: "#7ED3F4",
              data: [],
            },
            {
              name: '业务',
              type: 'line',
              color: "#EE6666",
              data: [],
            },
            {
              name: '产品',
              type: 'line',
              color: "#1832e8",
              data: []
            },
            {
              name: '研发',
              type: 'line',
              color: "#af13c1",
              data: []
            },
            {
              name: '管理',
              type: 'line',
              color: "#11d229",
              data: []
            }
        ]
      },
      quarter_num: null,
      exampleData:{
        xdata: ['2020-01','2020-02','2020-03','2020-04','2020-05','2020-06','2020-07','2020-08'],
        ydata0: [120, 132, 101, 134, 90, 230, 210,510,340,270],
        ydata1: [220, 182, 191, 234, 290, 330, 310,410,210,240],
        ydata2: [150, 232, 201, 154, 190, 330, 410,310,410,370],
        ydata3: [320, 432, 301, 334, 390, 330, 320,210,330,410],
        ydata4: [520, 332, 401, 434, 590, 230, 120,100,310,230],
      }
    };
  },
  props: {},
  components: {},
  mounted() {
    //加载mounted中渲染echarts
    this.quarter_num = this.initCharts('quarter_num', this.option_num);
    //进入页面调用接口传值
    this.queryData("setData");
  },
  methods: {
    /**
     * 折线图赋值
     */
    queryData(record) {
      if (record == "setData") {
        this.option_num.xAxis.data = this.exampleData.xdata;//x轴参数
        this.option_num.series[0].data = this.exampleData.ydata0;//每一条数据线参数
        this.option_num.series[1].data = this.exampleData.ydata1;
        this.option_num.series[2].data = this.exampleData.ydata2;
        this.option_num.series[3].data = this.exampleData.ydata3;
        this.option_num.series[4].data = this.exampleData.ydata4;
        this.quarter_num.hideLoading();
        this.quarter_num.setOption(this.option_num);
      }else{
        this.quarter_num.clear();
        this.quarter_num.showLoading({
          text: '暂无数据',
          color: '#458af8',
          showSpinner: false,
          maskColor: '#f1f1f185',
        });
      }
    },

    /**
     * 动态赋值
     */
    changeDemo() {
      this.queryData("setData");
    },

    /**
     * 清空
     */
    clearDemo() {
      this.queryData();
    },
    
    /**
     * loading加载
     */
    initCharts(id) {
      let myChart = echarts.init(document.getElementById(id));
      myChart.showLoading({
        text: '正在加载数据',
        color: '#458af8',
        maskColor: '#f1f1f185',
      });
      return myChart;
    },
  },
  computed: {},
  watch: {},
  destroyed() {},
};
</script>

<style lang="less" scoped>
.echats-demo {
  display: flex;
  background-color: #fff;
  .o-echats {
    width: 100%;
    text-align: center;
    .o-chart {
      width: 100%;
      height: 500px;
      padding: 20px;
      .o-echat{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
