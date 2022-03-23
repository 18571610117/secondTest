
<template>
  <div class="echats-demo">
    <div class="o-echats">
      <div class="o-item">
        <div class="o-echat" id="budget_cirle"></div>
      </div>
      <!-- <div><el-progress type="circle" :percentage="25"></el-progress></div> -->

      <el-button style="margin-left:10px" @click="changeDemo">赋值</el-button>
      <el-button @click="clearDemo">清空</el-button>
    </div>
  </div>
</template>
<script>
// import echarts from "@/utils/echarts"
import "echarts-liquidfill";
export default {
  data() {
    return {
      percent: "",
      //饼状图参数样式
      // option_cirle: {
      //   title: {
      //     show: true,
      //     text: "80%",
      //     x: "center",
      //     y: "center", // 通过x,y将标题(进度)定位在圆环中心
      //     textStyle: {
      //       fontSize: "45",
      //       color: "red",
      //       fontWeight: "400",
      //       fontFamily: "DINPro, DINPro-Regular"
      //     }
      //   },
      //   tooltip: {
      //     trigger: "item"
      //   },
      //   legend: {
      //     top: "5%",
      //     left: "center"
      //   },
      //   series: [
      //     {
      //       name: "访问来源",
      //       type: "pie",
      //       radius: ["40%", "70%"],
      //       avoidLabelOverlap: false,
      //       color: ["#7ED3F4", "#EE6666", "#1832e8", "#af13c1", "#11d229", "#e6a23c", "#0e71d6", "#d8ea16"],
      //       labelLine: {
      //         show: false
      //       },
      //       label: {
      //         show: false,
      //         position: "center"
      //       },
      //       data: []
      //     }
      //   ]
      // },
       option_cirle:{
                series: [{
                    type: 'liquidFill',
                    waveAnimation: false,
                    animation: false
                }]
            },
      budget_cirle: null,
      // exampleData: [
      //   { value: 1333, name: "搜索引擎"},
      //   { value: 1000, name: "直接访问" }
      // ]
                  exampleData:[{
                        value: 0.7
                    }],
    };
  },
  props: {},
  components: {},
  mounted() {
    this.budget_cirle = this.initCharts("budget_cirle", this.option_cirle);
    this.queryCirle("setData");
  },
  methods: {
    /**
     * 饼状图赋值
     */
    queryCirle(record) {
      if (record == "setData") {
        this.option_cirle.series[0].data = this.exampleData;
        // this.percent =
        //   (this.exampleData[1].value / this.exampleData[0].value) * 100;
        // this.option_cirle.title.text = this.percent.toFixed(2) + "%";
        this.budget_cirle.hideLoading();
        this.budget_cirle.setOption(this.option_cirle);
      } else {
        this.budget_cirle.clear();
        this.budget_cirle.showLoading({
          text: "暂无数据",
          color: "#458af8",
          showSpinner: false,
          maskColor: "#f1f1f185"
        });
      }
    },

    /**
     * 动态赋值传值
     */
    changeDemo() {
      this.queryCirle("setData");
    },

    /**
     * 清空图标
     */
    clearDemo() {
      this.queryCirle();
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
  },
  computed: {},
  watch: {},
  destroyed() {}
};
</script>

<style lang='less' scoped>
.echats-demo {
  display: flex;
  background-color: #fff;
  .o-echats {
    width: 100%;
    // text-align: center;
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
