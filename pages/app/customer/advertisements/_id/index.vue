<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Annapurna Trek
    </hero-bar>
    <section>
    <div class="card">
      <div class="card-image">
        <figure class="image is-2by1">
          <img src="https://static.toiimg.com/photo/67321906/kathmandu.jpg?width=740&resize=4" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-3">
              <b-icon
              icon="star-circle"
              size="is-small">
            </b-icon> Overview</p>
            <p class="subtitle is-6">Annapurna Trekking Highlights</p>
          </div>
        </div>

        <div class="content">
          Nepal is a beautiful country which has a rich culture and amazing history. It is a landlocked country which lies between the giant nations India and China. The country provides an excellent opportunity for travelers and tourists to explore it's natural and cultural beauty and have peace of mind. <a>@bulmaio</a>.
          <a href="#">#css</a> <a href="#">#responsive</a>
          <br>

        </div>
      </div>
    </div>
    </section>
    <section>
      <div class="card">
        <div class="card-content">
          <p class="title is-3">
            <b-icon
              icon="star-circle"
              size="is-small">
            </b-icon>
            Highlights</p>
          <div class="media">
            <div class="media-content">
              <p class="title is-4">
                <b-icon
                icon="calendar"
                size="is-small">
              </b-icon> Duration</p>
              <p class="subtitle is-6">10 Night 5 Days</p>
            </div>

            <div class="media-content">
              <p class="title is-4">
                <b-icon
                  icon="ticket"
                  size="is-small">
                </b-icon> Activities</p>
              <p class="subtitle is-6">
              <ul>
              <li>Dancing</li>
              <li>Dancing</li>
              </ul>
              </p>

            </div>
            <div class="media-content">
              <p class="title is-4">
                <b-icon
                icon="bed-king"
                size="is-small">
              </b-icon> Accomodations</p>
              <p class="subtitle is-6">@johnsmith</p>
            </div>
            <div class="media-content">

              <p class="title is-4">
                <b-icon
                icon="food"
                size="is-small">
              </b-icon> Meals</p>
              <p class="subtitle is-6">@johnsmith</p>
            </div>
            <div class="media-content">

              <p class="title is-4">
                <b-icon
                  icon="hiking"
                  size="is-small">
                </b-icon> Date</p>
              <p class="subtitle is-6"> <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time></p>
            </div>

          </div>



        </div>
      </div>
    </section>
    <section>

      <div class="card ">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <div class="columns is-centered">
                <div class="card">
                  <b-button type="is-primary"><strong>Itinerary</strong><p class="subtitle is-7 is-centered" style="color:white">Press here to download</p></b-button>
                  <b-button type="is-danger"><strong>Buy Package</strong><p class="subtitle is-7 is-centered" style="color:white">Hurry Up! 2 Left !</p></b-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>

      <section>
        <div class="section is-main-section">
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

    </section>
  </div>

</template>


<script>
import Discussion from "@/components/discussion/Discussion"

export default {
  components: {Discussion},
  middleware: ['auth', 'verified', 'customer'],
  layout: 'customer',
  computed: {
    titleStack() {
      return ['Advertisement Detail']
    },
  },

  data() {
    return {
      discussions: [],
      message: ''
    }
  },
  methods: {
    async postComment() {
      await this.$axios.post('/api/customer/advertisement-discussions', {
        advertisement_id: this.$route.params.id,
        message: this.message
      })
      this.message = ''

      await this.getAll()

    },
    async getAll() {
       const response = await this.$axios.get(`/api/customer/advertisement-discussions/${this.$route.params.id}`)
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
}
</script>

<style scoped>

</style>
