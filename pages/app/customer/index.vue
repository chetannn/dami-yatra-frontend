<template>
 <div>
<section class="section is-main-section">
<tiles>
  <card-widget
    class="tile is-child"
    type="is-success"
    icon="cart"
    :number="512"
    label="Bought"
  />
  <card-widget
    class="tile is-child"
    type="is-warning"
    icon="star"
    :number="512"
    label="Favorites"
  />
</tiles>
</section>
</div>
</template>
<script>
  import * as chartConfig from '@/components/Charts/chart.config'
  import TitleBar from '@/components/TitleBar'
  import HeroBar from '@/components/HeroBar'
  import Tiles from '@/components/Tiles'
  import CardWidget from '@/components/CardWidget'
  import CardComponent from '@/components/CardComponent'
  import LineChart from '@/components/Charts/LineChart'
  import ClientsTableSample from '@/components/ClientsTableSample'
export default {
    middleware: ['auth', 'verified', 'customer'],
    layout: 'customer',
  components: {
    // ClientsTableSample,
    LineChart,
      CardComponent,
      CardWidget,
      Tiles,
      HeroBar,
      TitleBar,
  },
  data() {
    return {
      defaultChart: {
        chartData: null,
        extraOptions: chartConfig.chartOptionsMain,
      },
    }
  },
  computed: {
    titleStack() {
      return ['Admin', 'Dashboard']
    },
  },
  mounted() {
    this.fillChartData()
    this.$buefy.snackbar.open({
      message: 'Welcome back',
      queue: false,
    })
  },
  methods: {
    randomChartData(n) {
      const data = []
      for (let i = 0; i < n; i++) {
        data.push(Math.round(Math.random() * 200))
      }
      return data
    },
    fillChartData() {
      this.defaultChart.chartData = {
        datasets: [
          {
            fill: false,
            borderColor: chartConfig.chartColors.default.primary,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: chartConfig.chartColors.default.primary,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: chartConfig.chartColors.default.primary,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.randomChartData(9),
          },
          {
            fill: false,
            borderColor: chartConfig.chartColors.default.info,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: chartConfig.chartColors.default.info,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: chartConfig.chartColors.default.info,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.randomChartData(9),
          },
          {
            fill: false,
            borderColor: chartConfig.chartColors.default.danger,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: chartConfig.chartColors.default.danger,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: chartConfig.chartColors.default.danger,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.randomChartData(9),
          },
        ],
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
      }
    },
  },
  head() {
    return {
      title: 'Dashboard — Admin One Nuxt.js',
    }
  },
  }
</script>

<style scoped>

</style>
