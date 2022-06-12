<template>
  <div>
    <canvas></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
export default {
  name: 'ChartComponent',
  props:{
    chartType:String,
    chartData:Object,
  },
  data: () => ({
    chartOptions: {
      plugins: {
        title: {
          display: true,
          text: 'Chart.js Bar Chart - Stacked'
        },
      },
      responsive: true,
      scales: {
        x: { stacked: true },
        y: { stacked: true }
      }
    }
  }),
  methods: {
    initilizeChart() {
      const chartElement = document.querySelector("canvas");  
      new Chart(chartElement, {
        type: this.chartType,
        data: this.chartData,
        options: this.chartOptions,
      })  
    }  
  },
  mounted() {
    this.initilizeChart();  
  }
}
</script>