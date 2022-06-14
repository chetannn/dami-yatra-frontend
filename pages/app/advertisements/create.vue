<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar :has-right-visible="false">
      Create Advertisement
    </hero-bar>
  </div>
</template>

<script>

import TitleBar from '@/components/TitleBar'
import HeroBar from '@/components/HeroBar'

export default {
  components: {
    TitleBar,
    HeroBar
  },
  computed: {
    titleStack() {
      return ['Advertisements', 'Create']
    },
  }
}
</script>

<style scoped>

</style>
