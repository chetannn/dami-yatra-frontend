<template>
  <nuxt-link :to="`/app/customer/advertisements/${advertisement.id}`">
  <div class="card">
    <div class="card-content" >
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="advertisement.vendor.user.profile_picture_url" :alt="advertisement.title">
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
          <b-button type="is-warning is-light" inverted icon-left="calendar-range">{{advertisement.purchased_by_count}}/{{advertisement.quantity}} Booked</b-button>

          <b-button :loading="favoriteLoading" v-if="advertisement.is_favorite" type="is-primary" @click.self="toggleFavoriteAdvertisement($event, advertisement)" icon-left="heart">Remove Favorite</b-button>
          <b-button :loading="favoriteLoading" v-else type="is-primary" @click.self="toggleFavoriteAdvertisement($event, advertisement)" icon-left="heart-outline">Favorite</b-button>
          <b-button @click="purchase(advertisement)">Purchase</b-button>


        </div>
      </div>
    </div>
  </div>
  </nuxt-link>

</template>

<script>
import appMixin from '@/mixins'

export default {
  props: ['advertisement', 'favoriteLoading'],
  mixins: [appMixin],
  methods: {
    toggleFavoriteAdvertisement($event, advertisement) {
        $event.stopImmediatePropagation()
        this.$emit('toggle-favorite', advertisement)
    },
    purchase(advertisement) {
        this.$khalti({
          amount: 20 * 100,
          eventHandler: {
            onSuccess: async (response) => {
              await this.$axios.post('/api/customer/pay', {
                amount: 20 * 100,
                advertisement_id: advertisement.id,
                token: response.token
              });
            }
          }

        })


    },

  }
}
</script>
