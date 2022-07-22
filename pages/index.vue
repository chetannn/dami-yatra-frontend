<template>
  <div class="op">

<nav-bar />

<section class="hero is-gray">
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="column is-6 is-offset-3">

        <div class="box rounded">
          <div class="field is-grouped">
            <p class="control is-expanded">

              <b-field>
                <b-input v-model="keyword" placeholder="Search" type="search" @keyup.native.enter="search" icon="magnify"
                         icon-right-clickable @icon-right-click="clearIconClick" rounded></b-input>
              </b-field>
            </p>
            <p class="control">
              <a class="button is-danger is-outlined is-rounded">
                       <span class="icon">
                          <i class="home"></i>
                       </span>Search
              </a>
                </p>

          </div>
        </div>
<!--        <h1 class="title">-->
<!--          Coming Soon-->
<!--        </h1>-->
        <h2 class="subtitle">
          $this is the best package platform for travelling in Nepal. We handle millions of customers every year. We hope you have a brillliant time surfing on our site.
        </h2>
      </div>
    </div>
  </div>
</section>
    <section>
      <div class="container">
        <div class="section">
          <div class="columns">
<!--            <div class="column has-text-centered">-->
<!--              <h1 class="title" style="color: ghostwhite;">Bulma Card </h1><br>-->
<!--            </div>-->
          </div>
          <div id="app" class="row columns is-multiline">
<!--            <div v-for="card in cardData" key="card.id" class="column is-4">-->


                <div v-if="$fetchState.pending && advertisements.length === 0">Loading....</div>

                        <nuxt-link :to="`/app/customer/advertisements/${advertisement.id}`" v-else :key="advertisement.id" v-for="advertisement in advertisements" class="column is-4">
              <div class="card large">
                <div class="card-image">
                  <figure class="image is-16by9">
                    <img :src="advertisement.cover_image_url" alt="Image">
                  </figure>
                </div>
                <div class="card-content is-overlay">
                  <span class="tag is-danger">New</span>
                </div>


                <div class="card-content">
                  <div class="media">
<!--                    <div class="media-left">-->
<!--                      <figure class="image is-48x48 ">-->
<!--                        <img class="is-rounded" src="https://www.w3schools.com/w3images/avatar2.png" alt="Image">-->
<!--                      </figure>-->
<!--                    </div>-->
                    <div class="media-content">
                      <p class="title is-4 ">{{advertisement.title}}</p>


                        <p class="title has-text-link ">
                          Rs {{advertisement.price}}
                        </p>

                        <nav class=" breadcrumb has-arrow-separator">
                          <ul class="container is-size-7">
                            <li :key="index" v-for="(city,index) in advertisement.major_cities" class="has-text-gray is-active"><a>{{city}}</a></li>
                          </ul>
                        </nav>


                    </div>
                    <div class="media-content">
                      <span class="tag is-link">By {{advertisement.vendor.name}}</span>
                      </div>

                  </div>


                  <div class="content">
                    {{advertisement.description}}
                  </div>

                  <div class="level">
                    <div class="level-item has-text-centered">
                      <div>
                        <p class="title is-6 float-none has-text-link">
                          <b-icon
                            icon="hiking"
                            size="is-medium"
                          type="is-link">
                          </b-icon> {{advertisement.purchased_by_count}}/{{advertisement.quantity}}
                        </p>
                      </div>
                    </div>
                    <div class="is-divider-vertical" data-content="OR"></div>
                    <div class="level-item has-text-centered">
                      <div>
                        <p class="title is-6 float-none has-text-link ">
                          <b-icon
                            icon="calendar"
                            size="is-medium"
                            type="">
                          </b-icon> {{$dayjs(advertisement.tour_start_date).format('MMMM D, YYYY')}}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

</nuxt-link>

            <b-pagination
              :total="total"
              v-model="current_page"
              :per-page="per_page"
              aria-next-label="Next page"
              aria-previous-label="Previous page"
              aria-page-label="Page"
              aria-current-label="Current page"
              @change="onPageChange"
             >
            </b-pagination>
<!--            </div>-->


          </div>
        </div>
      </div>
      <footer class="section">
        <div class="container">
          <div class="columns is-multiline content has-text-centered" style="border-bottom: 1px solid #dee2e6;background-color: white">
            <div class="column is-12 content has-text-centered">
              <a class="mb-4 is-inline-block" href="#">
                <img class="image" src="bulma-plain-assets/logos/plainb-logo.svg" alt="" width="96px">
              </a>
              <p class="has-text-grey-dark mb-6 ">DamiYatra is one of the best in the industry. Feel free to connect with us on the social sites.</p>
              <div class="buttons is-centered">
                <a class="button is-link is-inverted" href="#">About Us </a>
                <a class="button is-link is-inverted" href="#">Login</a>
                <a class="button is-link is-inverted" href="#">Registration</a>
                <a class="button is-link is-inverted" href="#"></a>
              </div>
              <div>
                <a class="mr-3 is-inline-block" href="#">
                  <b-icon
                    icon="instagram"
                    size="is-medium"
                    type="is-link">
                  </b-icon>
                </a>

                <a class="mr-3 is-inline-block" href="#">
                  <b-icon
                    icon="facebook"
                    size="is-medium"
                    type="is-link">
                  </b-icon>
                </a>
                <a class="mr-3 is-inline-block" href="#">
                  <b-icon
                    icon="linkedin"
                    size="is-medium"
                    type="is-link">
                  </b-icon>
                </a>
                <a class="is-inline-block" href="#">
                  <b-icon
                    icon="twitter"
                    size="is-medium"
                    type="is-link">
                  </b-icon>
                </a>
              </div>
            </div>
          </div>
          <div class="pt-5 has-text-centered">
            <p>All rights reserved © Dami Yatra 2022</p>
          </div>
        </div>
      </footer> <!-- this is where the footer end-->

    </section>
  </div>
</template>

<script>
// const burgerIcon =document.querySelector("#burger");
// const navbarMenu =document.querySelector("#nav-links");
// burgerIcon.addEventListener('click',()=>{
//   navbarMenu.classList.toggle('is-active')
// })

// export default {
//   name: "index"
// }

export default {
  data() {
    return {
      advertisements: [],
      current_page: 1,
      per_page: 6,
      total: 0,
      keyword: ''
    }
  },


  methods: {
    clearIconClick() {
      this.place = '';
    },

    onPageChange() {
      this.$fetch()
    },
    search() {
      this.$fetch()
    },
  },

  async fetch() {
    const response = await this.$axios.get(`/api/advertisements?page=${this.current_page}&keyword=${this.keyword}`)
    this.advertisements = response.data.data
    this.current_page = response.data.current_page
    this.per_page = response.data.per_page
    this.total = response.data.total
  },
}


</script>

<style scoped>
.hero.is-gray {
  background: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  /*), url('https://unsplash.it/1200/900?random') no-repeat center center fixed;*/
), url('https://img.freepik.com/premium-vector/airplane-flying-world-map-aircraft-travelling-flat-vector-concept_53562-5190.jpg?w=2000') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.hero .nav, .hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.hero .subtitle {
  padding: 3rem 0;
  line-height: 1.5;
  color:white;
}
</style>
