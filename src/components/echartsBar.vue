<template>
  <div>
    <div id="myChart" :style="{width: width, height: height }"></div>
  </div>
</template>
<script>
  import echarts from 'echarts';
  export default {
    props:{
      width:{
        type: String,
        default:'500px'
      },
      height:{
        type: String,
        default:'300px'
      },
      xAxisData:{
        type: Array,
        default: []
      },
      seriesData:{
        type: Array,
        default: []
      }
    },
    data(){
      return {
        echartsTitle: '柱状图'
      }
    },
    mounted(){
      this.drawLine();
    },
    methods:{
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: { text: this.echartsTitle },
          tooltip: {},
          xAxis: {
            data: this.xAxisData
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: this.seriesData
          }]
        });
      }
    }
  }
</script>
