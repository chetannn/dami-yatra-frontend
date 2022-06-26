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
    <b-tabs v-model="activeTab" type="is-toggle" expanded>
      <b-tab-item label="All" icon="clipboard-list-outline">
        <div class="mb-4"  v-for="(advertisement) in advertisements" :key="advertisement.id">
          <AdvertisementCard :advertisement="advertisement" @delete-advertisement="deleteAdvertisement" />
        </div>

      </b-tab-item>
      <b-tab-item label="Published" icon="playlist-check"></b-tab-item>
      <b-tab-item label="Draft" icon="format-list-checkbox"></b-tab-item>
    </b-tabs>
  </div>

      <b-pagination
        :total="total"
        v-model="currentPage"
        :simple="false"
        :per-page="perPage"
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
       currentPage: 1,
       perPage: 10,
       activeTab: 0
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
    async onPageChange() {
      const loadingComponent = this.$buefy.loading.open({
        container: null
      })

      await this.getAll();

      loadingComponent.close()
    },
    async getAll() {
      const response = await this.$axios.get(`/api/vendor/advertisements?page=${this.currentPage}`)
      this.advertisements = response.data.data
      this.total = response.data.total
      this.currentPage = response.data.current_page
      this.perPage = response.data.per_page

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
