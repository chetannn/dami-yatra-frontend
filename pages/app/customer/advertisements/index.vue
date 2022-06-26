<template>
  <div>
  <title-bar :title-stack="titleStack" />
  <hero-bar>
    Advertisements
  </hero-bar>
  </div>
</template>

<script>
export default {
  layout: 'customer',
  middleware: ['auth', 'verified', 'customer'],
  computed: {
    titleStack() {
      return ['Advertisements', 'Lists']
    },
  },
}
</script>

<style scoped>

</style>
