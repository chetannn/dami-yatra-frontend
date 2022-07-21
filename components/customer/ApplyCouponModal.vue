<template>
  <form @submit.prevent="submit">
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Apply Coupon</p>
        <button
          type="button"
          class="delete"
          @click="$emit('close')"/>
      </header>
      <section class="modal-card-body">
        <b-field label="Coupon">
          <b-input
            placeholder="Coupon Name"
            required>
          </b-input>
        </b-field>
      </section>

      <footer class="modal-card-foot">
        <b-button
          label="Apply"
          native-type="submit"
          type="is-primary" />
      </footer>
    </div>
  </form>
</template>

<script>
export default {
  name: "ApplyCouponModal"
}
</script>

<style scoped>

</style>
