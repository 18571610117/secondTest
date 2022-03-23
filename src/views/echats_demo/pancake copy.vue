<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: wlg
 * @Date: 2021-09-07 19:44:53
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-09 19:47:14
-->
<template>
  <div class="echats-demo">
    <div class="o-echats">
      <div class="o-item">
        <div class="o-echat" id="quarter_cirle"></div>
      </div>
      <el-button style="margin-left:10px" @click="changeDemo">赋值</el-button>
      <el-button @click="clearDemo">清空</el-button>
    </div>
  </div>
</template>
<script>
// import echarts from "@/utils/echarts"
export default {
  data() {
    return {
      //饼状图参数样式
      option_cirle: {
        legend: {
          orient: "vertical",
          left: 20,
          top: 150
        },
        title: {
          text: "饼状图",
          subtext: "模拟数据-上传github1"
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: "面积模式",
            type: "pie",
            radius: ["50%", "70%"],
            center: ["50%", "50%"],
            //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：=='radius' 扇区圆心角展现数据的百分比，半径展现数据的大小。
            //'area' 所有扇区圆心角相同，仅通过半径展现数据大小。
            label: {
              show: true
            },
            emphasis: {
              label: {
                // 鼠标移动上去显示的信息
                show: true,
                // formatter: "{a}\n{b}: {d}" //{a}：系列名。{b}：数据名。{c}：数据值。{d}：百分比。
                // formatter: (e)=>{
                //   return `你好${e.seriesName}\n${e.name}${e.percent}%`
                // }
                formatter: e => {
                  return e.name.length > 1
                    ? e.name.substr(0, 1) + "..."
                    : e.name;
                }
              }
            },
            itemStyle: {
              //表示内圆角半径和外圆角半径都是 10px。
              borderRadius: 8
            },
            data: [],
            color: [
              "#7ED3F4",
              "#EE6666",
              "#1832e8",
              "#af13c1",
              "#11d229",
              "#e6a23c",
              "#0e71d6",
              "#d8ea16"
            ]
          }
        ]
      },
      quarter_cirle: null,
      exampleData: [
        { value: 40, name: "测试" },
        { value: 38, name: "研发" },
        { value: 32, name: "售后" },
        { value: 30, name: "产品" },
        { value: 28, name: "销售" },
        { value: 26, name: "需求" },
        { value: 22, name: "维护" },
        { value: 18, name: "跟进" }
      ]
    };
  },
  props: {},
  components: {},
  mounted() {
    this.quarter_cirle = this.initCharts("quarter_cirle", this.option_cirle);
    this.queryCirle("setData");
  },
  methods: {
    /**
     * 饼状图赋值
     */
    queryCirle(record) {
      if (record == "setData") {
        this.option_cirle.series[0].data = this.exampleData;
        this.quarter_cirle.hideLoading();
        this.quarter_cirle.setOption(this.option_cirle);
        var elementDiv = document.getElementById("extension");
      var elementDiv = document.getElementById("extension");
      if (!elementDiv) {
        var div = document.createElement("div");
        div.setAttribute("id", "extension");
        div.style.display = "block";
        document.querySelector("html").appendChild(div);
      }
      this.quarter_cirle.on("legendselectchanged", function(params) {
         console.log("22", params);
          var elementDiv = document.querySelector("#extension");
          //设置悬浮文本的位置以及样式
          var elementStyle =
            "position: absolute;z-index: 99999;color: #fff;font-size: 12px;padding: 5px;display: inline;border-radius: 4px;background-color: #303133;box-shadow: rgba(0, 0, 0, 0.3) 2px 2px 8px";
          elementDiv.style.cssText = elementStyle;
          elementDiv.innerHTML = params.name;
          document.querySelector("html").onmousemove = function(event) {
            var elementDiv = document.querySelector("#extension");
            var xx = event.pageX - 10;
            var yy = event.pageY + 15;
            console.log("22", xx);
            elementDiv.style.top = yy + "px";
            elementDiv.style.left = xx + "px";
          };
      });
      this.quarter_cirle.on("mouseout", function(params) {
        //注意这里，我是以X轴显示内容过长为例，如果是y轴的话，需要改为yAxis
        if (params.componentType == "legend") {
          var elementDiv = document.querySelector("#extension");

          elementDiv.style.cssText = "display:none";
        }
      });
      } else {
        this.quarter_cirle.clear();
        this.quarter_cirle.showLoading({
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
