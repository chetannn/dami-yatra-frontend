<template>
<div>
<title-bar :title-stack="titleStack" />
<hero-bar>
  Customer Payments
</hero-bar>

<section class="section is-main-section">
  <b-table focusable bordered hoverable :loading="loading" :data="payments">
    <b-table-column field="customer" label="Customer Name" v-slot="props">
      {{props.row.customer.name}}
    </b-table-column>

    <b-table-column field="advertisement" label="Advertisement" v-slot="props">
      {{props.row.advertisement.title}}
    </b-table-column>

    <b-table-column field="price" label="Price" v-slot="props">
      {{props.row.total_amount_with_tax}}
    </b-table-column>

    <b-table-column field="status" label="Status" v-slot="props">
      {{props.row.status}}
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
      return ['Customer Payments']
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
    const { data }  = await this.$axios.get('/api/vendor/customer-payments')
    this.loading = false
    this.payments = data.data
  }
}
</script>

<style scoped>

</style>
