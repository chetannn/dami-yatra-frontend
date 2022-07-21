<template>

  <div class="card">
    <div class="card-content" >
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="advertisement.cover_image_url" :alt="advertisement.title">
          </figure>
        </div>

        <div class="media-content" >

          <nuxt-link :to="`/app/vendor/advertisements/${advertisement.id}`">
          <p class="title is-4">{{advertisement.title}}</p>
          </nuxt-link>
          <p class="subtitle is-6">Rs {{advertisement.price}}
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
              <nuxt-link :to="`/app/vendor/advertisements/edit/${advertisement.id}`">edit</nuxt-link>
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
          <b-button type="is-info is-light" inverted icon-left="airplane">{{advertisement.duration}}</b-button>
          <b-button type="is-info is-light" inverted  icon-left="eye">
            0
          </b-button>
          <b-button type="is-warning is-light" inverted icon-left="calendar-range">{{displayExpirationDate(advertisement.ad_end_date)}}</b-button>
          <b-button type="is-primary" icon-left="heart">{{advertisement.favorited_by_count}}</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppMixin from "@/mixins"

export default {
  name: "AdvertisementCard",
  mixins: [AppMixin],
  props: {
     advertisement: {
       type: Object
     }
  },
  methods: {
    deleteAdvertisement(id) {
      this.$emit('delete-advertisement', id)
    },
    displayExpirationDate(adEndDate) {
      const remainingDays = this.diffDate(adEndDate)

      if(remainingDays <= 0) {
         return 'Advertisement Expired'
      }
      else {
        return `${remainingDays} Days Remaining`
      }

    }
  }
}
</script>

<style scoped>

</style>
