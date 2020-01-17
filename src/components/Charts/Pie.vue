<script>
import { Pie } from 'vue-chartjs'
export default {
  name: 'Pie',
  extends: Pie,
  data: () => ({
    chartdata: {
      labels: ['January', 'February', 'March'],
      datasets: [{
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)'
        ],
        data: [10, 20, 30]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>

<style scoped>

</style>
