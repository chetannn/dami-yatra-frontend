<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Advertisements
      <nuxt-link slot="right" to="/app/advertisements/create" class="button is-primary">
        Create an Advertisement
      </nuxt-link>
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
