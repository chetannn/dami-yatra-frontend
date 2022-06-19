<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Advertisements
      <nuxt-link slot="right" to="/app/advertisements/create" class="button is-primary">
        Create an Advertisement
      </nuxt-link>
    </hero-bar>

    <section class="section is-main-section">

  <div class="column">
    <b-tabs type="is-toggle" expanded>
      <b-tab-item label="All" icon="clipboard-list-outline">
        <div class="card" v-for="(advertisement) in advertisements" :key="advertisement.id">
          <div class="card-content" >
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
              </div>

              <div class="media-content" >
                <p class="title is-4">{{advertisement.title}}</p>
                <p class="subtitle is-6">Rs 20,000
                  (
                  <b-icon
                    icon="currency-usd"
                    size="is-small"
                    type="is-info">
                  </b-icon>

                  )</p>
              </div>
              <div class="media-right">
                <b-dropdown aria-role="list">
                  <template #trigger>
                    <!--                  <p-->
                    <!--                    class="tag "-->
                    <!--                    role="button">-->
                    <b-icon
                      icon="menu-down"
                      type="is-info"
                      size="is-medium">
                    </b-icon>
                    <!--                  </p>-->
                  </template>


                  <b-dropdown-item aria-role="listitem">
                    <nuxt-link :to="`/app/advertisements/edit/${advertisement.id}`">edit</nuxt-link>
                  </b-dropdown-item>
                  <b-dropdown-item @click="deleteAdvertisement(advertisement.id)" aria-role="listitem">delete</b-dropdown-item>
                </b-dropdown>
              </div>
            </div>

            <div class="content">
                {{advertisement.description}}
              <br>

            </div>
            <div class="content">
              <div class="buttons">
                <b-button type="is-info is-light" inverted icon-left="airplane">4 Nights 5 Days</b-button>
                <b-button type="is-info is-light" inverted  icon-left="eye">
                   0
                </b-button>
                <b-button type="is-warning is-light" inverted icon-left="calendar-range">20 Days Remaining</b-button>
              </div>
            </div>
          </div>
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
  data() {
     return {
       advertisements: [],
       total: 0,
       currentPage: 1,
       perPage: 10
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
  }
}
</script>
