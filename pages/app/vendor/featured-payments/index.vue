<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
       Featured Advertisement Payments
    </hero-bar>

    <section class="section is-main-section">
      <b-table focusable bordered hoverable :loading="loading" :data="payments">

        <b-table-column field="advertisement" label="Advertisement" v-slot="props">
          {{props.row.advertisement.title}}
        </b-table-column>

        <b-table-column field="amount" label="Amount" v-slot="props">
          {{props.row.amount}}
        </b-table-column>

        <b-table-column field="type" label="Type" v-slot="props">
          {{props.row.type}}
        </b-table-column>

        <b-table-column field="status" label="Status" v-slot="props">
          {{props.row.status === 1 ? 'Paid' : 'Pending'}}
        </b-table-column>


      </b-table>

    </section>

  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar'
import HeroBar from '@/components/HeroBar'

export default {
  middleware: ['auth', 'verified', 'vendor'],
  layout: 'vendor',
  components: {
    TitleBar,
    HeroBar
  },
  computed: {
    titleStack() {
      return ['Featured Payments']
    },
  },
  data() {
    return {
      payments: [],
      loading: false
    }
  },

  async mounted() {
    this.loading = true
    const { data }  = await this.$axios.get('/api/vendor/featured-ad-payment')
    this.loading = false
    this.payments = data.data
  }
}
</script>

<style scoped>

</style>
