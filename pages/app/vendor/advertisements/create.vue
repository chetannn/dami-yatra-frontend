<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
       Create Advertisement
      <nuxt-link slot="right" to="/" class="button">
        Dashboard
      </nuxt-link>
    </hero-bar>
    <section class="section is-main-section">
       <AdvertisementForm />
    </section>
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar'
import HeroBar from '@/components/HeroBar'
import AppError from '@/components/AppError'
import AdvertisementForm from '@/components/vendor/AdvertisementForm'

export default {
  layout: 'vendor',
  middleware: ['auth', 'verified', 'vendor'],
  name: 'Forms',
  components: {
    HeroBar,
    TitleBar,
    AppError,
    AdvertisementForm
  },
  data() {
    return {

    }
  },
  computed: {
    titleStack() {
      return ['Vendor', 'Advertisement', 'Create']
    },
  },
  methods: {
  },
  head() {
    return {
      title: 'Add Advertisement - Dami Yatra',
    }
  },
}
</script>
