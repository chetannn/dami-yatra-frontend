<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Payments
    </hero-bar>

    <section class="section is-main-section">
      <b-table focusable bordered hoverable :loading="loading" :data="payments">

        <b-table-column field="advertisement" label="Advertisement" v-slot="props">
          {{props.row.advertisement.title}}
        </b-table-column>

        <b-table-column field="price" label="Total Amount with Tax" v-slot="props">
          {{props.row.total_amount_with_tax}}
        </b-table-column>

        <b-table-column field="taxable" label="Taxable Amount" v-slot="props">
          {{props.row.taxable_amount}}
        </b-table-column>

        <b-table-column field="discount" label="Discount Amount" v-slot="props">
          {{props.row.discount_amount}}
        </b-table-column>

        <b-table-column field="status" label="Status" v-slot="props">
          {{props.row.status}}
        </b-table-column>


        <b-table-column custom-key="actions" label="Actions" v-slot="props">
          <b-button type="is-primary">View Receipt</b-button>
        </b-table-column>

      </b-table>

    </section>
  </div>

</template>

<script>
export default {
  layout: 'customer',
  middleware: ['auth', 'verified', 'customer'],
  data() {
    return {
      loading: false,
      payments: []
    }
  },
  computed: {
    titleStack() {
      return ['Payments']
    },
  },
  async mounted() {
    this.loading = true
    const { data }  = await this.$axios.get('/api/customer/payments')
    this.loading = false
    this.payments = data.data
  }
}
</script>

<style scoped>

</style>
