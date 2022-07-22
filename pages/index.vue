<template>
  <div class="op">
  <section>
<nav class="navbar has-shadow is-white">
  <div class="navbar-brand>">
    <a class="navbar-item">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsScWYmyfPv3XdkNdEFVJ1wlDKMOgcSWUcg&usqp=CAU" alt="logo" style="max-height:50px" class="py-2 px-2">
    </a>
    <a class="navbar-burger" id="burger">
      <span></span>
      <span></span>
      <span></span>
    </a>
  </div>

  <div class="navbar-menu" id="nav-links">
    <div class="navbar-end">
      <nuxt-link to="/login" class="navbar-item">Login</nuxt-link>
      <nuxt-link to="/register" class="navbar-item">Register</nuxt-link>

    </div>
  </div>
</nav>
  </section>

  <section>
<!--    Breadcrumb-->
<!--<div class="section pt-4 pb-0">-->
<!--  <nav class=" breadcrumb has-arrow-separator">-->
<!--    <ul class="container is-size-6">-->
<!--      <li><a class="has-text-grey">DamiYatra</a></li>-->
<!--      <li><a class="has-text-grey">Advertisement</a></li>-->
<!--      <li class="is-active"><a>Annapurna Base Camp</a></li>-->
<!--    </ul>-->
<!--  </nav>-->
<!--</div>-->

  </section>
<section class="hero is-gray">
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="column is-6 is-offset-3">

        <div class="box rounded">
          <div class="field is-grouped">
            <p class="control is-expanded">

              <b-field>
                <b-input  placeholder="Search Places" type="search"  icon="magnify"
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

                        <div v-else :key="advertisement.id" v-for="advertisement in advertisements" class="column is-4">
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

</div>
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
                    icon="git"
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
      foo: 'bar'
    }
  },


  methods: {
    clearIconClick() {
      this.place = '';
    }
  },
  async fetch() {
    const response = await this.$axios.get(`/api/advertisements`)
    this.advertisements = response.data.data
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
