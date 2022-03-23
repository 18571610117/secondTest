<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: wlg
 * @Date: 2021-09-09 11:30:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-09 19:46:56
-->
<template>
  <div class="echats-demo">
    <div class="o-echats">
      <div class="o-item">
        <div class="o-echat" id="quarter"></div>
      </div>
      <el-button style="margin-left:10px" @click="changeDemo">赋值</el-button>
      <el-button @click="clearDemo">清空</el-button>
    </div>
  </div>
</template>
<script>
import echarts from "@/utils/echarts"
export default {
  data () {
    return {
      //参数样式
      option: {
        title: {
          text: '营收分布图',
          subtext: '模拟数据'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        legend: {
          data: ['财政营收', '销售营收', '整体营收']
        },
        xAxis: [
          {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisPointer: {
                type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '分布量',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value}'
            },
          },
          {
            type: 'value',
            name: '单位维度',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: [
          {
            name: '财政营收',
            type: 'bar',
            color: "#5673CC",
            data: []
          },
          {
            name: '销售营收',
            type: 'bar',
            color: "#91CC75",
            data: []
          },
          {
            name: '整体营收',
            type: 'line',
            yAxisIndex: 1,
            color: "#7ED3F4",
            data: []
          }
        ]
      },
      quarter: null,
      //模拟数据
      exampleData: {
        barData1: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
        barData2: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
        lineData: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
      }
    }
  },
  mounted () {
    this.quarter = this.initCharts("quarter", this.option);
    this.queryData("setData");
  },
  methods: {
    /**
     * 组合图赋值
     */
    queryData(record){
      if(record == "setData"){
        this.option.series[0].data = this.exampleData.barData1;
        this.option.series[1].data = this.exampleData.barData2;
        this.option.series[2].data = this.exampleData.lineData;
        this.quarter.hideLoading();
        this.quarter.setOption(this.option);
      }else{
        this.quarter.clear();
        this.quarter.showLoading({
          text: "暂无数据",
          color: "#458af8",
          showSpinner: false,
          maskColor: "#f1f1f185",
        });
      }
    },
    /**
     * 动态赋值传值
     */
    changeDemo(){
      this.queryData("setData");
    },

    /**
     * 清空图标
     */
    clearDemo(){
      this.queryData();
    },

    /**
     * loading加载
     */
    initCharts(id) {
      let myChart = echarts.init(document.getElementById(id));
      myChart.showLoading({
        text: "正在加载数据",
        color: "#458af8",
        maskColor: "#f1f1f185",
      });
      return myChart;
    },
  },
}
</script>

<style lang='less' scoped>
.echats-demo{
  display: flex;
  background-color: #fff;
  .o-echats{
    width: 100%;
    text-align: center;
    .o-item{
      width: 100%;
      height: 600px;
      padding: 20px;
      .o-echat{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
