<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar :has-right-visible="false">
      Advertisements
    </hero-bar>
  </div>
</template>

<script>

import TitleBar from '@/components/TitleBar'
import HeroBar from '@/components/HeroBar'

export default {
  layout: 'app',
  components: {
    TitleBar,
    HeroBar
  },
  computed: {
    titleStack() {
      return ['Advertisements', 'Lists']
    },
  },
}
</script>
