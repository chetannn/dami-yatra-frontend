<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar :has-right-visible="false">
      Profile
    </hero-bar>

    <section class="section is-main-section">
      <h1>Hello</h1>
    </section>

  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar'
import HeroBar from '@/components/HeroBar'

export default {
   layout: 'app',
  name: "profile",
  components: {
    TitleBar,
    HeroBar
  },
  computed: {
    titleStack() {
      return ['Profile']
    },
  },
}
</script>

<style scoped>

</style>
