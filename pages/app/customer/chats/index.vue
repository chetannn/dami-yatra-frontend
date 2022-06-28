<template>
 <section class="section is-main-section">
 </section>
</template>

<script>
export default {
  layout: 'customer',
  middleware: ['auth', 'verified', 'customer']
}
</script>

<style scoped>


</style>
