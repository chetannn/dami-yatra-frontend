<template>
  <div>
  <title-bar :title-stack="titleStack" />
  <hero-bar :has-right-visible="false">
    Dashboard
  </hero-bar>
  </div>
</template>

<script>

import TitleBar from '@/components/TitleBar'
import HeroBar from '@/components/HeroBar'

export default {
  name: 'IndexPage',
  middleware: ['auth', 'verified', 'userType'],
  layout: 'app',
  components: {
    TitleBar,
    HeroBar
  },
  computed: {
    titleStack() {
      return ['Dashboard']
    },
  },
}
</script>
