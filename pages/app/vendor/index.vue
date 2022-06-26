<template>
  <div>Vendor</div>
</template>

<script>
export default {
   middleware: ['auth', 'verified', 'vendor'],
  layout: 'vendor'
}
</script>

<style scoped>

</style>
