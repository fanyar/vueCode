<template>
    <div>
      <div style="margin-left: 50px;"><pluralityEchart></pluralityEchart></div>
      <!--<div style="margin-top: 200px">-->
        <!--<lineChart></lineChart>-->
      <!--</div>-->
    </div>
</template>

<script>
  import pluralityEchart from '../components/plurality-echart/plurality-echart'
  import lineChart from '../components/line-chart/line-chart'


    export default {
        name: 'pluralityEchartView',
        components: {
          pluralityEchart,
          lineChart
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>
