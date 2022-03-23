<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: wlg
 * @Date: 2021-09-07 09:39:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-09 19:47:06
-->
<template>
  <div class="echats-demo">
    <div class="o-echats">
      <div class="o-item">
        <div id="quarter_type" ref="quarter_type" class="o-echart"></div>
      </div>
      <el-button @click="changeDemo">赋值</el-button>
      <el-button @click="clearDemo">清空</el-button>
      <!-- <el-divider /> -->
    </div>
  </div>
</template>

<script>
/**
 * 1.类目轴和非类目轴(连续)的区别就是坐标轴上的展示信息是否是数据连贯
 * 2.
 *
 */
// import echarts from "@/utils/echarts"; //柱状图==条形图==按需引入
export default {
  data() {
    return {
      //柱状图==条形图参数样式
      option_type: {
        title: {
          text: "资产分布图", //主标题文本，支持使用 \n 换行。
          subtext: "模拟数据" //副标题文本，支持使用 \n 换行。
        },
        tooltip: {
          trigger: "axis", //坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用==阴影触发的图表类型
          axisPointer: {
            type: "shadow" //鼠标移动上去显示阴影框==里面显示当前数值
          },
          position: function(pos, params, dom, rect, size) {
            // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。---不是
            // tooltip 单位太多 echart放不下
            var obj = { top: -50 };
            obj[["left", "right"][+(pos[0] < size.viewSize[0] / 2)]] = 100;
            return obj;
          }
          //  formatter: '{a}<br />{b0}: {c0}<br />{b1}: {c1}' //tooltip==formatter自定义操作 开发无操作 原阴影提示信息？
        },
        legend: {
          data: ["2011年", "2012年"], //图例==这里面的2022年和series数组中的对象中name一一对应，如果不一致则不显示图例name，不报错
          backgroundColor: "#ccc", //图例==整体背景颜色
          textStyle: {
            color: "#f2f2f2" //图例==整体文字颜色
          }
        },
        grid: {
          left: "3%", // grid 组件离容器左侧的距离。可以是像 '20%' 这样相对于容器高宽的百分比
          right: "4%",
          bottom: "3%",
          // true:grid.left grid.right grid.top grid.bottom grid.width grid.height 决定的是包括了坐标轴标签在内的所有内容所形成的矩形的位置。
          //这常用于『防止标签溢出』的场景，标签溢出指的是，标签长度动态变化时，可能会溢出容器或者覆盖其他组件
          containLabel: true
        },
        xAxis: {
          type: "value", //坐标轴类型。value==数值轴，适用于连续数据。
          boundaryGap: [0, 0.01] //非类目轴，包括时间，数值，对数轴，boundaryGap是一个两个值的数组，分别表示数据最小值和最大值的延伸范围，可以直接设置数值或者相对的百分比，在设置 min 和 max 后无效==直观表现就是y轴数值间隔
        },
        yAxis: {
          type: "category", //类目轴
          data: []
        },
        series: [
          //现项目图表是存放数据
          {
            name: "2011年",
            type: "bar",
            color: "#1832e8", //柱图的填充颜色
            data: []
          },
          {
            name: "2012年",
            type: "bar",
            color: "#91CC75",
            data: []
          }
        ]
      },
      quarter_type: null,
      //模拟数据
      exampleData: {
        xdata: [40, 24, 30, 19, 15, 8, 7, 11, 19, 31, 21, 11], //x轴参数1
        xdatas: [20, 12, 13, 11, 14, 5, 2, 6, 9, 10, 11, 5], //x轴参数2
        ydata: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月"
        ] //Y轴数据
      }
    };
  },
  mounted() {
    //加载mounted中渲染echarts
    this.quarter_type = this.initCharts("quarter_type", this.option_type);
    //进入页面调用接口传值
    this.queryData("setData");
  },
  methods: {
    /**
     * 表单传值
     */
    queryData(record) {
      if (record == "setData") {
        this.option_type.yAxis.data = this.exampleData.ydata;
        this.option_type.series[0].data = this.exampleData.xdata;
        this.option_type.series[1].data = this.exampleData.xdatas;
        this.quarter_type.hideLoading();
        this.quarter_type.setOption(this.option_type);
      } else {
        this.quarter_type.clear();
        this.quarter_type.showLoading({
          text: "暂无数据",
          color: "#458af8",
          showSpinner: false,
          maskColor: "#f1f1f185"
        });
      }
    },

    /**
     * 动态赋值图表
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

<style lang="less" scoped>
.echats-demo {
  display: flex;
  background-color: #fff;
  .o-echats {
    width: 100%;
    //text-align: center;
    .o-item {
      width: 100%;
      height: 500px;
      padding: 20px;
      // echarts需要给到固定的宽高
      .o-echart {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
