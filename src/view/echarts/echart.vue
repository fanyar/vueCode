<template>
  <div>
    <EchartsBar :width="width" :height="height" :xAxisData="xAxisData" :seriesData="seriesData"></EchartsBar>
  </div>
</template>
<script>
import EchartsBar from '@/components/echartsBar'

  export  default {
    data(){
      return {
        width:'800px',
        height:'500px',
        xAxisData:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子","风衣"],
        seriesData:[5, 20, 36, 10, 10, 20, 90]
      }
    },
    components:{
      EchartsBar
    }
  }
</script>
