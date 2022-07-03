<template>
<div>Advertisement Detail Page</div>
</template>

<script>
export default {
  middleware: ['auth', 'verified', 'customer'],
  layout: 'customer'
}
</script>

<style scoped>

</style>
