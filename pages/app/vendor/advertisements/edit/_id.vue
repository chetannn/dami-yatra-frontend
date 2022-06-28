<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Edit Advertisement
      <nuxt-link slot="right" to="/" class="button">
        Dashboard
      </nuxt-link>
    </hero-bar>
    <section class="section is-main-section">
        <AdvertisementForm :advertisement="advertisement" />
    </section>
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar'
import CardComponent from '@/components/CardComponent'
import CheckboxPicker from '@/components/CheckboxPicker'
import RadioPicker from '@/components/RadioPicker'
import FilePicker from '@/components/FilePicker'
import HeroBar from '@/components/HeroBar'
import AdvertisementForm from '@/components/vendor/AdvertisementForm'

export default {
  layout: 'vendor',
  middleware: ['auth', 'verified', 'vendor'],
  components: {
    AdvertisementForm,
    HeroBar,
    FilePicker,
    RadioPicker,
    CheckboxPicker,
    CardComponent,
    TitleBar,
  },
  data() {
    return {
      isLoading: false,
      advertisement: null,
    }
  },
  computed: {
    titleStack() {
      return ['Vendor', 'Advertisement', 'Edit']
    },
  },
  methods: {
    async submit() {
      try {
        this.isLoading = true
        await this.$axios.put('/api/vendor/advertisements/' + this.$route.params.id , this.form)

        this.$buefy.snackbar.open({
          message: 'Advertisement updated successfully',
          queue: false,
        }, 2000)

        this.$router.push('/app/advertisements')
      }

      catch(e) {
        this.isLoading = true
        throw e
      }

    },

  },
  head() {
    return {
      title: 'Edit Advertisement',
    }
  },
  async mounted() {
    const response = await this.$axios.get('/api/vendor/advertisements/' + this.$route.params.id)
    let responseData = response.data

    const tags = responseData.tags && responseData.tags.map((tag) => tag.name)

    this.advertisement = { ...responseData, tags }

  }
}
</script>
