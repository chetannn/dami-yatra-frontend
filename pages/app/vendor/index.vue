<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar :has-right-visible="false">
      Dashboard
    </hero-bar>
    <section class="section is-main-section">
      <tiles>
        <card-widget
          class="tile is-child"
          type="is-info"
          icon="account-multiple"
          :number="customers"
          label="Customers"
        />
        <card-widget
          class="tile is-child"
          type="is-success"
          icon="cash"
          :number="revenue"
          prefix=""
          label="Revenue"
        />
<!--        <card-widget-->
<!--          class="tile is-child"-->
<!--          type="is-link"-->
<!--          icon="cash-100"-->
<!--          :number="7770"-->
<!--          prefix="$"-->
<!--          label="Total Tax"-->
<!--        />-->

        <card-widget
          class="tile is-child"
          type="is-link"
          icon="ticket"
          :number="coupons"
          label="Coupons"
        />
        <card-widget
          class="tile is-child"
          type="is-info"
          icon="eye"
          :number="views"
          label="Views"
        />
        <card-widget
          class="tile is-child"
          type="is-success"
          icon="devices"
          :number="activeAds"
          suffix=" ads"
          label="Active Ads"
        />
        <card-widget
          class="tile is-child"
          type="is-danger"
          icon="monitor-off"
          :number="expiredAds"
          suffix=" ads"
          label="Expired Ads"
        />
        <card-widget
          class="tile is-child"
          type="is-warning"
          icon="monitor-edit"
          :number="draftedAds"
          suffix=" ads"
          label="Draft Ads"
        />
        <card-widget
          class="tile is-child"
          type="is-link"
          icon="monitor-star"
          :number="featuredAds"
          suffix=" ads"
          label="Featured Ads"
        />

      </tiles>

      <card-component
        title="Performance"
        icon="finance"
        header-icon="reload"
        @header-icon-click="fillChartData"
      >
        <div v-if="defaultChart.chartData" class="chart-area">
          <line-chart
            ref="bigChart"
            style="height: 100%;"
            chart-id="big-line-chart"
            :chart-data="defaultChart.chartData"
            :extra-options="defaultChart.extraOptions"
          >
          </line-chart>
        </div>
      </card-component>

      <card-component title="Clients" class="has-table has-mobile-sort-spaced">
<!--        <clients-table-sample-->
<!--          :data-url="`${$router.options.base}data-sources/clients.json`"-->
<!--        />-->
      </card-component>
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
 // import ClientsTableSample from '@/components/ClientsTableSample'

export default {
  name: 'Home',
  middleware: ['auth', 'verified', 'vendor'],
  layout: 'vendor',
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
      activeAds: 0,
      coupons: 0,
      customers: 0,
      draftedAds: 0,
      expiredAds: 0,
      featuredAds: 0,
      views: 0,
      revenue: 0
    }
  },
  computed: {
    titleStack() {
      return ['Admin', 'Dashboard']
    },
  },
  async mounted() {
    this.fillChartData()
    this.$buefy.snackbar.open({
      message: 'Welcome back',
      queue: false,
    })

    const { data } = await this.$axios.get('/api/vendor/stats')
    this.activeAds = data.activeAds
    this.coupons = data.coupons
    this.customers = data.customers
    this.draftedAds = data.draftedAds
    this.expiredAds = data.expiredAds
    this.featuredAds = data.featuredAds
    this.views = parseInt(data.views)
    this.revenue = data.revenue.total

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
