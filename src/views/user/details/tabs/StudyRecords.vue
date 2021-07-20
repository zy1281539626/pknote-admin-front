<template>
  <div class="study-records">
    <div class="total-card">
      <el-row :gutter="16">
        <el-col v-for="item of totalList" :key="item.label" :sm="12" :md="6" class="card-wrap">
          <div class="card">
            <div class="card-title">{{ item.label }}</div>
            <div class="card-value">{{ item.value }}</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="info-title">学习数据概况</div>
    <div id="main" style="height: 300px; width: 100%"></div>
  </div>
</template>

<script lang="ts">
  import * as echarts from 'echarts'
  export default {
    name: 'StudyRecords',
    data() {
      return {
        totalList: [
          { label: '今日学习时长(min)', value: 100 },
          { label: '总学习时长(min)', value: 100 },
          { label: '连续学习天数(天)', value: 7 },
          { label: '已学习课程数(节)', value: 10 }
        ]
      }
    },
    mounted() {
      let chartDom = document.getElementById('main')
      let studyChart = echarts.init(chartDom as HTMLElement)
      let option = {
        color: ['#FFBF00'],
        title: {
          // text: '渐变堆叠面积图111'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: [
              '2020-05-17',
              '2020-05-18',
              '2020-05-19',
              '2020-05-20',
              '2020-05-21',
              '2020-05-22',
              '2020-05-23'
            ]
          }
        ],
        yAxis: [
          {
            name: '学习时长(分钟)',
            nameTextStyle: {
              fontSize: 16
            },
            type: 'value'
          }
        ],
        series: [
          {
            type: 'line',
            smooth: true,
            lineStyle: {
              width: 3,
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                {
                  offset: 1,
                  color: '#00C7FF'
                },
                {
                  offset: 0,
                  color: '#2A6EFF'
                }
              ])
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.2,
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                {
                  offset: 1,
                  color: '#00C7FF'
                },
                {
                  offset: 0,
                  color: '#2A6EFF'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [0.45, 0.21, 0.41, 0.48, 0.38, 0.29, 0.6]
          }
        ]
      }
      option && studyChart.setOption(option)
      window.onresize = () => {
        return (() => {
          studyChart.resize()
        })()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .study-records {
    .total-card .card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 172px;
      text-align: center;
      background-color: #f8f9fb;
      margin-bottom: 30px;
      .card-title {
        color: #999;
        font-size: 24px;
        font-family: PingFang, PingFang-SC-Medium;
        font-weight: SC-Medium;
        margin-bottom: 20px;
      }
      .card-value {
        font-size: 40px;
        font-family: PingFang, PingFang-SC-Bold;
        font-weight: SC-Bold;
        color: #333333;
      }
    }
    .info-title {
      display: flex;
      align-items: center;
      font-size: 22px;

      &::before {
        content: '';
        width: 4px;
        height: 16px;
        margin-right: 12px;
        background: #2590f9;
        border-radius: 2px;
      }
    }
  }
</style>
