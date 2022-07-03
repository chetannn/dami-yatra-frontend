<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Advertisements
      <nuxt-link slot="right" to="/app/vendor/advertisements/create" class="button is-primary">
        Create an Advertisement
      </nuxt-link>
    </hero-bar>

    <section class="section is-main-section">

  <div class="column">
    <b-tabs v-model="activeTab" @input="onTabChange" type="is-toggle" expanded>
      <b-tab-item label="All" icon="clipboard-list-outline">
        <div class="mb-4"  v-for="(advertisement) in advertisements" :key="advertisement.id">
          <AdvertisementCard :advertisement="advertisement" @delete-advertisement="deleteAdvertisement" />
        </div>

      </b-tab-item>
      <b-tab-item label="Published" icon="playlist-check"></b-tab-item>
      <b-tab-item label="Draft" icon="format-list-checkbox">
        <div class="mb-4"  v-for="(advertisement) in advertisements" :key="advertisement.id">
          <AdvertisementCard :advertisement="advertisement" @delete-advertisement="deleteAdvertisement" />
        </div>
      </b-tab-item>
    </b-tabs>
  </div>

      <b-pagination
        :total="total"
        v-model="current_page"
        :simple="false"
        :per-page="per_page"
        aria-next-label="Next page"
        aria-previous-label="Previous page"
        aria-page-label="Page"
        aria-current-label="Current page"
        @change="onPageChange"
       >
      </b-pagination>
    </section>
  </div>
</template>

<script>

import TitleBar from '@/components/TitleBar'
import HeroBar from '@/components/HeroBar'
import AdvertisementCard from "@/components/vendor/AdvertisementCard";

export default {
  layout: 'vendor',
  middleware: ['auth', 'verified', 'vendor'],
  components: {
    TitleBar,
    HeroBar,
    AdvertisementCard
  },
  computed: {
    titleStack() {
      return ['Advertisements', 'Lists']
    },
  },
  data() {
     return {
       advertisements: [],
       total: 0,
       current_page: 1,
       per_page: 10,
       activeTab: 0,
       params: {}
     }
  },
  methods: {
    deleteAdvertisement(id) {
      this.$buefy.dialog.confirm({
        title: 'Deleting advertisement',
        message: 'Are you sure you want to <b>delete</b> this advertisement? This action cannot be undone.',
        confirmText: 'Delete advertisement',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: async () => {
            try {

              const loadingComponent = this.$buefy.loading.open({
                  container: null
                })

              await this.$axios.get('/sanctum/csrf-cookie')
              await this.$axios.delete(`/api/vendor/advertisements/${id}`)

              loadingComponent.close()

              this.$buefy.toast.open('Advertisement deleted!')

              await this.getAll()

            }
            catch (e) {

            }

        }
      })
    },
   async onTabChange(value) {
      if(value === 0) {
        delete this.params.status
      }

      if(value === 1) {
        this.params.status = 1
      }

      if(value === 2) {
        this.params.status = 0
      }

      await this.getAll(this.params)

    },
    async onPageChange() {
      const loadingComponent = this.$buefy.loading.open({
        container: null
      })

      await this.getAll();

      loadingComponent.close()
    },
    async getAll(params = {}) {

      params.current_page = this.current_page
      this.params = params

      const qs = new URLSearchParams(this.params)

      const response = await this.$axios.get(`/api/vendor/advertisements?page=${qs.toString()}`)
      this.advertisements = response.data.data
      this.total = response.data.total
      this.current_page = response.data.current_page
      this.per_page = response.data.per_page

    }
  },
  async mounted() {

    const loadingComponent = this.$buefy.loading.open({
      container: null
    })

      await this.getAll();

    loadingComponent.close()
  },
  head() {
    return {
      title: 'Advertisements'
    }
  }
}
</script>
