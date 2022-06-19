<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Advertisements
      <nuxt-link slot="right" to="/app/advertisements/create" class="button is-primary">
        Create an Advertisement
      </nuxt-link>
    </hero-bar>
  </div>
</template>

<template>
  <div class="column">
  <b-tabs type="is-toggle" expanded>
    <b-tab-item label="All" icon="clipboard-list-outline">

      <div class="card">

        <div class="card-content" >
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
              </figure>
            </div>

            <div class="media-content" >
              <p class="title is-4">Pokhara Holidays</p>
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


                <b-dropdown-item aria-role="listitem">edit</b-dropdown-item>
                <b-dropdown-item aria-role="listitem">delete</b-dropdown-item>
                <b-dropdown-item aria-role="listitem">..</b-dropdown-item>
              </b-dropdown>
            </div>
          </div>

          <div class="content">
            Pokhara is in the northwestern corner of the Pokhara Valley, which is a widening of the Seti Gandaki valley that lies in the region (Pahad) of the Himalayas. In this region, the mountains rise very quickly, and within 30 kilometres (19 miles), the elevation rises from 1,000 to 7,500 metres (3,300 to 24,600 feet). <a>@bulmaio</a>.
            <a href="#">#css</a> <a href="#">#responsive</a>
            <br>

          </div>
          <div class="content">
          <div class="buttons">
            <b-button type="is-info is-light" inverted icon-left="airplane">4 Nights 5 Days</b-button>
            <b-button type="is-info is-light" inverted  icon-left="eye">10
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
}
</script>
