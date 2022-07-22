<template>
  <div>
  <title-bar :title-stack="titleStack" />
  <hero-bar>
    Advertisements
  </hero-bar>

    <section class="section is-main-section">

      <div class="column">
        <b-tabs v-model="activeTab" @input="onTabChange" type="is-toggle" expanded>
          <b-tab-item label="All" icon="clipboard-list-outline">
            <div class="mb-4"  v-for="(advertisement) in advertisements" :key="advertisement.id">
              <AdvertisementCard :favoriteLoading="favoriteLoading" :advertisement="advertisement" @toggle-favorite="toggleFavoriteAdvertisement" />
            </div>
          </b-tab-item>

          <b-tab-item label="Favorites" icon="playlist-check">
            <div class="mb-4" v-for="(advertisement) in advertisements" :key="advertisement.id">
            <AdvertisementCard :favoriteLoading="favoriteLoading" :advertisement="advertisement" @toggle-favorite="toggleFavoriteAdvertisement" />
            </div>
          </b-tab-item>
          <b-tab-item label="Purchased" icon="format-list-checkbox">
            <div class="mb-4" v-for="(advertisement) in advertisements" :key="advertisement.id">
              <AdvertisementCard :favoriteLoading="favoriteLoading" :advertisement="advertisement" @toggle-favorite="toggleFavoriteAdvertisement" />
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
import AdvertisementCard from "@/components/customer/AdvertisementCard";

export default {
  components: {AdvertisementCard},
  layout: 'customer',
  middleware: ['auth', 'verified', 'customer'],
  data() {
    return {
      advertisements: [],
      total: 0,
      current_page: 1,
      per_page: 6,
      activeTab: 0,
      favoriteLoading: false,
      params: {}
    }
  },
  computed: {
    titleStack() {
      return ['Advertisements', 'Lists']
    },
  },
  methods: {
      async onTabChange(value) {

         if(value === 1) {
           this.params.is_favorite = true
           delete this.params.is_purchased

         }

         if(value === 2) {
           this.params.is_purchased = true
           delete this.params.is_favorite
         }

         if(value === 0) {
           delete this.params.is_favorite
           delete this.params.is_purchased
         }

        await this.getAll(this.params)

      },
     async toggleFavoriteAdvertisement(advertisement) {
      try {

        this.favoriteLoading = true
        await this.$axios.post('/api/customer/saved-advertisements/toggle', {
          advertisement_id: advertisement.id
        })

        await this.getAll()
        this.favoriteLoading = false

      }
      catch (error) {

      }
    },
    async getAll(params = {}) {

      this.params = { ...this.params, ...params  }

      const qs = new URLSearchParams(this.params);

      const response = await this.$axios.get(`/api/customer/advertisements?${qs.toString()}`)
      this.advertisements = response.data.data
      this.total = response.data.total
      this.current_page = response.data.current_page
      this.per_page = response.data.per_page

    },
    async onPageChange() {
      const loadingComponent = this.$buefy.loading.open({
        container: null
      })

      await this.getAll({
        page: this.current_page
      });

      loadingComponent.close()
    },
  },
  async mounted() {

    const loadingComponent = this.$buefy.loading.open({
      container: null
    })

    await this.getAll();

    loadingComponent.close()
  },

}
</script>

<style scoped>

</style>
