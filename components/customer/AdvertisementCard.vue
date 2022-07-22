<template>

  <div class="card">
    <div class="card-content" >
      <div class="media">
        <div class="media-left" >
          <nuxt-link :to="`/app/customer/advertisements/${advertisement.id}`">
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
          <div class="column px-0 is-12">
            {{advertisement.description}}
            <br>
          </div>
        </div>

        <div class="column is-2">
          <div class="media-content">
            <figure class="image is-48x48">
              <img :src="advertisement.vendor.user.profile_picture_url" :alt="advertisement.title">
            </figure>
            <div class="column is-12 px-0">
              Sold by: </br> {{advertisement.vendor.user.name}}
            </div>
          </div>

          <div class="media-content" >
            <nuxt-link :to="`/app/customer/advertisements/${advertisement.id}`">

            </nuxt-link>
          </div>
        </div>

      </div>
      <div class="content">
        <div class="buttons">
          <b-button type="is-info is-light" inverted icon-left="airplane">{{advertisement.duration}}</b-button>
          <b-button type="is-info is-light" inverted  icon-left="eye">
            {{advertisement.clicks}}
          </b-button>
          <b-button type="is-warning is-light" inverted icon-left="calendar-range">{{advertisement.purchased_by_count}}/{{advertisement.quantity}} Booked</b-button>

          <b-button  v-if="advertisement.is_favorite" type="is-primary" @click="toggleFavoriteAdvertisement($event, advertisement)" icon-left="heart">Remove Favorite</b-button>
          <b-button  v-else type="is-primary" @click="toggleFavoriteAdvertisement($event, advertisement)" icon-left="heart-outline">Favorite</b-button>


        </div>
      </div>
    </div>
  </div>

</template>

<script>
import appMixin from '@/mixins'

export default {
  props: ['advertisement', 'favoriteLoading'],
  mixins: [appMixin],
  methods: {
    toggleFavoriteAdvertisement($event, advertisement) {
        this.$emit('toggle-favorite', advertisement)
    },
  }
}
</script>
