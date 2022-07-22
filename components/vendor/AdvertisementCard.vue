<template>

  <div class="card">
    <div class="card-content" >
      <div class="media">
        <div class="media-left" >
          <nuxt-link :to="`/app/vendor/advertisements/${advertisement.id}`">
            <figure class="image is-128x128">
              <img :src="advertisement.cover_image_url" :alt="advertisement.title">
            </figure>
          </nuxt-link>
        </div>
        <div class="media-content">
          <p class="title is-4">
            {{advertisement.title}}
          </p>
          <div class="title is-4 mb-4">
            रु {{advertisement.price}}
          </div>
          <div class="column px-0 is-6">
            {{advertisement.description}}
            <br>
          </div>
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
              <nuxt-link :to="`/app/vendor/advertisements/edit/${advertisement.id}`">
                <b-icon
                icon="circle-edit-outline"
                type="is-info"
                size="is-small">
              </b-icon>edit</nuxt-link>
            </b-dropdown-item>
            <b-dropdown-item @click="deleteAdvertisement(advertisement.id)" aria-role="listitem">
              <b-icon
              icon="delete-forever-outline"
              type="is-info"
              size="is-small">
            </b-icon>delete</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>

      <div class="content">
        <div class="buttons">
          <b-button type="is-info is-light" inverted icon-left="airplane">{{advertisement.duration}}</b-button>
          <b-button type="is-info is-light" inverted  icon-left="eye">
            {{advertisement.clicks}}
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
