<template>
  <div v-if="$fetchState.pending">Loading...</div>
  <div v-else>
    <title-bar :title-stack="titleStack" />


    <!-- breadcrumbs -->
    <div class="section pt-4 pb-0">
      <nav class="breadcrumb has-arrow-separator">
        <ul class="container is-size-6">
          <li><a class="has-text-grey">Home</a></li>
          <li><a class="has-text-grey">Advertisements</a></li>
          <li class="is-active"><a>{{ advertisement.title }}</a></li>
        </ul>
      </nav>
    </div>

    <!-- product info -->
    <section class="section">
      <div class="container">
        <div class="columns is-vcentered is-multiline">
          <div class="column is-6-tablet is-5-desktop has-text-centered">
            <img :src="advertisement.cover_image_url" :alt="advertisement.title">
          </div>
          <div class="column is-6-tablet is-3-desktop">


          </div>

          <div class="column is-12-tablet is-4-desktop">
            <h1 class="is-size-3-mobile is-size-1-desktop title">{{ advertisement.title }}</h1>

            <nav class="breadcrumb has-bullet-separator px-0">
              <ul class="container is-size-7 px-0">
                <li :key="index" v-for="(city, index) in advertisement.major_cities"><a class="has-text-grey">{{city}}</a></li>
              </ul>
            </nav>
            <p class="mb-4">By <span text-is-link>{{advertisement.vendor.name}}</span></p>

            <p class="mb-4">{{advertisement.description}}</p>
            <div class="is-size-4 mb-4">रु {{advertisement.price}}</div>


            <form>

              <div class="buttons">
                <b-button type="is-primary" icon-left="heart">{{advertisement.favorited_by_count}}</b-button>

                <b-button
                  label="Itinerary"
                  type="link"
                  @click="downloadFile"
                  icon-left="download" outlined/>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">

        <div class="card">
          <div class="card-content">
            <p class="subtitle is-3">
              Highlights</p>
            <div class="media">
              <div class="media-content">
                <p class="subtitle is-4">
                  <b-icon
                    icon="calendar"
                    size="is-small">
                  </b-icon> Duration</p>
                <p class="subtitle is-6">{{advertisement.duration}}</p>
              </div>

              <div class="media-content">
                <p class="subtitle is-4">
                  <b-icon
                    icon="ticket"
                    size="is-small">
                  </b-icon> Activities</p>
                <p class="subtitle is-6">
                <ul>
                  <li v-for="activity in advertisement.activities">{{activity}}</li>
                </ul>
                </p>

              </div>
              <div class="media-content">
                <p class="subtitle is-4">
                  <b-icon
                    icon="bed-king"
                    size="is-small">
                  </b-icon> Accomodations</p>
                <p class="subtitle is-6">
                <ul>
                  <li v-for="accommodation in advertisement.accommodations">{{accommodation}}</li>
                </ul>
                </p>
              </div>
              <div class="media-content">

                <p class="subtitle is-4">
                  <b-icon
                    icon="food"
                    size="is-small">
                  </b-icon> Meals</p>
                <p class="subtitle is-6">
                <ul>
                  <li v-for="meal in advertisement.meals">{{meal}}</li>
                </ul>
                </p>
              </div>
              <div class="media-content">

                <p class="subtitle is-4">
                  <b-icon
                    icon="hiking"
                    size="is-small">
                  </b-icon> Date</p>
                <p class="subtitle is-6"> <time datetime="2016-1-1">{{$dayjs(advertisement.tour_start_date).format('MMMM D, YYYY')}}</time></p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>


    <section class="section">
      <div class="container">

        <div class="columns is-8 is-variable">

          <div class="column is-7-tablet">
            <!-- tabbed content -->
            <b-tabs type="is-boxed" v-model="activeTab">
              <b-tab-item label="Includes">
                <ul>
                  <li :key="index" v-for="(include, index) in advertisement.includes">{{include}}</li>
                </ul>
              </b-tab-item>

              <b-tab-item label="Excludes">
                <ul>
                  <li :key="index" v-for="(exclude, index) in advertisement.excludes">{{exclude}}</li>
                </ul>
              </b-tab-item>

            </b-tabs>

          </div>
          <div class="column is-5-tablet">
            <!-- message box -->
            <div class="message">
              <div class="message-header">
                <p>Stay in Touch</p>
              </div>
              <div class="message-body">
                <p>Subscribe to our newsletter so we can spam you with offers and discounts</p>
                <div class="has-text-centered mt-5">
                  <b-field>
                    <b-input placeholder="Email"
                             type="email"
                             icon="email"
                    >
                    </b-input>
                  </b-field>
                  <button class="button is-success" id="signup">Yes! I love a good deal</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="title is-3">
          <b-icon
            icon="star-circle"
            size="is-small">
          </b-icon> Discussions</p>

        <Discussion :discussions="discussions" />


        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img class="is-rounded" :src="$auth.user.profile_picture_url">
            </p>
          </figure>
          <div class="media-content">
            <div class="field">
              <p class="control">
                <textarea v-model="message" class="textarea" placeholder="Add a comment..."></textarea>
              </p>
            </div>
            <div class="field">
              <p class="control">
                <button @click="postComment" class="button">Post comment</button>
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- modal -->
    <div class="modal is-dark">
      <div class="modal-background"></div>
      <div class="modal-content has-background-white p-5">
        <h3 class="title">Join the Club ;)</h3> <hr>
        <form>
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input type="text" class="input" placeholder="Name">
            </div>
          </div>
          <div class="field mt-4">
            <label class="label">Email</label>
            <div class="control">
              <input type="email" class="input" placeholder="Email">
            </div>
          </div>
          <div class="field mt-5">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox">
                I agree to the <a>Terms &amp; Conditions</a>
              </label>
            </div>
          </div>
          <div class="has-text-right mt-6">
            <button class="button mx-3 is-medium" id="cancel-modal">Cancel</button>
            <button class="button is-dark px-5 is-medium" id="success-modal">Join</button>
          </div>
        </form>
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
  </div>

</template>


<script>
import Discussion from "@/components/discussion/Discussion";
export default {
  components: {Discussion},
  middleware: ['auth', 'verified', 'vendor'],
  layout: 'vendor',
  computed: {
    titleStack() {
      return ['Advertisement Detail']
    },
  },

  data() {
    return {
      discussions: [],
      message: '',
      advertisement: null,
      activeTab: 0
    }
  },
  methods: {
    downloadFile() {
      window.open(this.advertisement.itinerary_file_url, '_blank')
    },
    async postComment() {
      await this.$axios.post('/api/vendor/advertisement-discussions', {
        advertisement_id: this.$route.params.id,
        message: this.message
      })
      this.message = ''

      await this.getAll()

    },
    async getAll() {
      const response = await this.$axios.get(`/api/vendor/advertisement-discussions/${this.$route.params.id}`)
      this.discussions = response.data
    }
  },

  async mounted() {

    const loadingComponent = this.$buefy.loading.open({
      container: null
    })

    await this.getAll();

    loadingComponent.close()
  },
  async fetch() {
    const response = await this.$axios.get(`/api/vendor/advertisements/${this.$route.params.id}`)
    this.advertisement = response.data
  },
}
</script>
