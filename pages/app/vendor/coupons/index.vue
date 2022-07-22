<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Coupons

      <template v-slot:right>
        <b-button type="is-primary" @click="openDialog">
          Create a Coupon
        </b-button>
      </template>

    </hero-bar>

    <section class="section is-main-section">
    <b-table focusable bordered hoverable :loading="loading" :data="coupons">
        <b-table-column field="name" label="Name" v-slot="props">
          {{props.row.name}}
        </b-table-column>

      <b-table-column field="discount_rate" label="Discount Rate" v-slot="props">
        {{props.row.discount_rate}}
      </b-table-column>

      <b-table-column field="expiration_date" label="Expiration Date" v-slot="props">
        {{$dayjs(props.row.expiration_date).format('MMMM D, YYYY')}}
      </b-table-column>

      <b-table-column field="limit" label="Limit" v-slot="props">
        {{props.row.limit}}
      </b-table-column>


        <b-table-column custom-key="actions" label="Actions" v-slot="props">
          <b-button>view</b-button>
          <b-button type="is-primary">edit</b-button>
          <b-button type="is-danger">delete</b-button>
        </b-table-column>
    </b-table>

    </section>

  </div>
</template>

<script>

import TitleBar from '@/components/TitleBar'
import HeroBar from '@/components/HeroBar'
import CouponModal from "@/components/vendor/CouponModal";

export default {
  middleware: ['auth', 'verified', 'vendor'],
  layout: 'vendor',
  components: {
    TitleBar,
    HeroBar,
    CouponModal
  },
  computed: {
    titleStack() {
      return ['Coupons']
    },
  },
  data() {
    return {
      coupons: [],
      loading: false,
      columns: [
        {
          field: 'id',
          label: 'Id',
          width: '40',
          numeric: true
        },
        {
          field: 'name',
          label: 'Name',
        },
        {
          field: 'discount_rate',
          label: 'Discount Rate',
        },
        {
          field: 'expiration_date',
          label: 'Expiration Date',
          centered: true
        },
        {
          field: 'limit',
          label: 'Limit',
        },

      ]
    }
  },
  methods: {
    openDialog() {
      this.$buefy.modal.open({
        parent: this,
        component: CouponModal,
        hasModalCard: true,
        customClass: 'custom-class custom-class-2',
        trapFocus: true
      })
    }
  },
  async mounted() {
    this.loading = true
    const { status, data }  = await this.$axios.get('/api/vendor/coupons')
    this.loading = false
    this.coupons = data.data
  }
}
</script>
