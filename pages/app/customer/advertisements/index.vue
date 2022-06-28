<template>
  <div>
  <title-bar :title-stack="titleStack" />
  <hero-bar>
    Advertisements
  </hero-bar>

    <section class="section is-main-section">

      <div class="column">
        <b-tabs v-model="activeTab" type="is-toggle" expanded>
          <b-tab-item label="All" icon="clipboard-list-outline">
            <div class="mb-4"  v-for="(advertisement) in advertisements" :key="advertisement.id">
              <div class="card">
                <div class="card-content" >
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img :src="advertisement.cover_image_path_url" :alt="advertisement.title">
                      </figure>
                    </div>

                    <div class="media-content" >
                      <p class="title is-4">{{advertisement.title}}</p>
                      <p class="subtitle is-6">Rs {{advertisement.price}}
                        (
                        <b-icon
                          icon="currency-usd"
                          size="is-small"
                          type="is-info">
                        </b-icon>

                        )</p>
                    </div>

                  </div>

                  <div class="content">
                    {{advertisement.description}}
                    <br>

                  </div>
                  <div class="content">
                    <div class="buttons">
                      <b-button type="is-info is-light" inverted icon-left="airplane">{{advertisement.duration}}</b-button>
                      <b-button type="is-info is-light" inverted  icon-left="eye">
                        0
                      </b-button>
                      <b-button type="is-warning is-light" inverted icon-left="calendar-range">{{ diffDate(advertisement.ad_end_date) }} Days Remaining</b-button>

                      <b-icon type="is-primary" icon="heart-outline"></b-icon>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </b-tab-item>
          <b-tab-item label="Favorites" icon="playlist-check"></b-tab-item>
          <b-tab-item label="Purchased" icon="format-list-checkbox"></b-tab-item>
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
export default {
  layout: 'customer',
  middleware: ['auth', 'verified', 'customer'],
  data() {
    return {
      advertisements: [],
      total: 0,
      currentPage: 1,
      perPage: 6,
      activeTab: 0,
    }
  },
  computed: {
    titleStack() {
      return ['Advertisements', 'Lists']
    },
  },
  methods: {
    async getAll() {
      const response = await this.$axios.get(`/api/customer/advertisements?page=${this.currentPage}`)
      this.advertisements = response.data.data
      this.total = response.data.total
      this.currentPage = response.data.current_page
      this.perPage = response.data.per_page

    },
    diffDate(toDate, fromDate = null, unit = 'day') {

      if(!fromDate) {
        fromDate = this.$dayjs()
      }

      return this.$dayjs(toDate).diff(fromDate, unit)
    },
    async onPageChange() {
      const loadingComponent = this.$buefy.loading.open({
        container: null
      })

      await this.getAll();

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
