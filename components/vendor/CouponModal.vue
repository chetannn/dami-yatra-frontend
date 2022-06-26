<template>
  <form @submit.prevent="submit">
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Create Coupon</p>
        <button
          type="button"
          class="delete"
          @click="$emit('close')"/>
      </header>
      <section class="modal-card-body">
        <b-field label="Name">
          <b-input
            placeholder="Name"
            v-model="form.name"
            required>
          </b-input>
        </b-field>

        <b-field label="Discount Rate">
          <b-input
            v-model="form.discount_rate"
            placeholder="Discount Rate (in percentage)"
            required>
          </b-input>
        </b-field>

        <b-field label="Limit">
          <b-input
            v-model.number="form.limit"
            type="number"
            placeholder="Limit"
            required>
          </b-input>
        </b-field>

        <b-field label="Expiration Date">
          <b-datepicker
            placeholder="Type or select a date..."
            icon="calendar-today"
            v-model="form.expiration_date"
            editable>
          </b-datepicker>
        </b-field>

      </section>
      <footer class="modal-card-foot">
        <b-button
          label="Save"
          native-type="submit"
          type="is-primary" />
      </footer>
    </div>
  </form>
</template>

<script>
export default {
  name: "CouponModal",
  data() {
    return {
      form: {
        name: '',
        discount_rate: null,
        limit: 5,
        expiration_date: new Date()
      }
    }
  },
  methods: {
    async submit() {
      try {

        const { status } = await this.$axios.post('/api/vendor/coupons', this.form)

        if(status === 201) {
          this.$buefy.snackbar.open({
            message: 'Coupon created successfully',
            queue: false,
          }, 2000)
        }

      }
      catch (err) {

      }

    }
  }
}
</script>

<style scoped>

.modal-card-body {
  overflow: visible !important;
}
</style>
