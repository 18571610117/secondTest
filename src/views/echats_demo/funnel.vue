<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: wlg
 * @Date: 2021-09-09 11:30:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-09 19:46:59
-->
<template>
  <div class="echats-demo">
    <div class="o-echats">
      <div class="o-item">
        <div class="o-echat" id="quarter_funnel"></div>
      </div>
      <el-button style="margin-left:10px" @click="changeDemo">赋值</el-button>
      <el-button @click="clearDemo">清空</el-button>
    </div>
  </div>
</template>
<script>
// import echarts from "@/utils/echarts";
export default {
  data() {
    return {
      //漏斗图参数样式
      option_funnel: {
        title: {
          text: "漏斗图",
          subtext: "纯属虚构"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
          feature: {
            //除了各个内置的工具按钮外，还可以自定义工具按钮。
            dataView: { readOnly: false }, //就是那文本框似的图标点进去就有现在图表所用的数此就是设计该数据可以修改的
            restore: {}, //配置项还原。是左边那一系列的功能
            saveAsImage: {} //保存为图片。
          }
        },
        legend: {
          data: ["测试网站", "样本量", "生成订单", "支付订单", "完成订单"]
        },
        series: [
          {
            name: "币种分布", //系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
            type: "funnel",
            left: "10%",
            top: 60, //漏斗图组件离容器上侧的距离。==可以是像 '20%' 这样相对于容器高宽的百分比
            //x2: 80,
            bottom: 60,
            width: "80%",
            // height: {totalHeight} - y - y2,
            min: 0, //指定的数据最小值。
            max: 100, //指定的数据最大值。
            minSize: "60%",
            //可以是绝对的像素大小，也可以是相对布局宽度的百分比，如果需要最小值的图形并不是尖端三角，可通过设置该属性实现。
            maxSize: "100%",
            //数据排序， 可以取 'ascending'，'descending'，'none'（表示按 data 顺序），或者一个函数（即 Array.prototype.sort(function (a, b) { ... })）。
            sort: "descending",
            //数据图形间距。本图表中白色间距
            gap: 2,
            label: {
              //漏斗图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
              show: true,
              position: "inside" //标签的位置。
            },
            labelLine: {
              //在 label 位置 设置为'left'或者'right'的时候会显示视觉引导线。
              length: 10, //引导线长度
              lineStyle: {
                width: 1, //引导线宽度
                type: "solid" //线的类型。'solid' 'dashed' 'dotted'
              }
            },
            itemStyle: {
              borderColor: "#fff", //图形的描边颜色
              borderWidth: 1
            },
            emphasis: {
              //高亮的标签和图形样式。
              label: {
                fontSize: 16 //鼠标移上漏斗里面的文字的字体大小。
              }
            },
            //调色盘，多种类型//设置系列自己专属的调色盘。==series
            color: [
              "#7ED3F4",
              "#EE6666",
              "#1832e8",
              "#af13c1",
              "#d8ea16",
              "#e6a23c",
              "#0e71d6",
              "#d8ea16"
            ],
            data: []
          }
        ]
      },
      quarter_funnel: null,
      //模拟数据
      exampleData: [
        { value: 60, name: "生成订单" },
        { value: 40, name: "支付订单" },
        { value: 20, name: "完成订单" },
        { value: 80, name: "样本量" },
        { value: 100, name: "测试网站" }
      ]
    };
  },
  mounted() {
    this.quarter_funnel = this.initCharts("quarter_funnel", this.option_funnel);
    this.queryData("setData");
  },
  methods: {
    /**
     * 漏斗图赋值
     */
    queryData(record) {
      // console.dir(Number);
      this.quarter_funnel.clear();
      this.quarter_funnel.showLoading({
        text: "暂无数据",
        color: "#DC143C",
        showSpinner: false,
        maskColor: "#f1f1f185"
      });
      if (record == "setData") {
        // setTimeout(() => {
          this.option_funnel.series[0].data = this.exampleData;
          this.quarter_funnel.hideLoading();
          this.quarter_funnel.setOption(this.option_funnel);
        // }, 3000);
      } else {
        this.quarter_funnel.clear();
        this.quarter_funnel.showLoading({
          text: "暂无数据",
          color: "#DC143C",
          showSpinner: false,
          maskColor: "#f1f1f185"
        });
      }
    },
    /**
     * 动态赋值传值
     */
    changeDemo() {
      this.queryData("setData");
    },

    /**
     * 清空图标
     */
    clearDemo() {
      this.queryData();
    },

    /**
     * loading加载
     */
    initCharts(id) {
      let myChart = this.$echarts.init(document.getElementById(id));
      myChart.showLoading({
        text: "正在加载数据",
        color: "#458af8",
        maskColor: "#f1f1f185"
      });
      return myChart;
    }
  }
};
</script>

<style lang='less' scoped>
.echats-demo {
  display: flex;
  background-color: #fff;
  .o-echats {
    width: 100%;
    text-align: center;
    .o-item {
      width: 100%;
      height: 600px;
      padding: 20px;
      .o-echat {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
