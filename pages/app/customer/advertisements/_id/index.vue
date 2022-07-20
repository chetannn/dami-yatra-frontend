<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Annapurna Trek
    </hero-bar>
<!--    <nav class="navbar has-shadow is-white">-->
<!--      &lt;!&ndash; logo / brand &ndash;&gt;-->
<!--      <div class="navbar-brand">-->
<!--        <a href="#" class="navbar-item">-->
<!--          <img src="" alt="site-logo" style="max-height: 70px;" class="py-2 px-2">-->
<!--        </a>-->
<!--        <a class="navbar-burger" id="burger">-->
<!--          <span></span>-->
<!--          <span></span>-->
<!--          <span></span>-->
<!--        </a>-->
<!--      </div>-->
<!--      <div class="navbar-menu" id="nav-links">-->
<!--        <div class="navbar-end">-->
<!--          <a class="navbar-item">My Account</a>-->
<!--          <a class="navbar-item" id="shopping-cart">Shopping Cart (0)</a>-->
<!--        </div>-->
<!--      </div>-->
<!--    </nav>-->

    <!-- breadcrumbs -->
    <div class="section pt-4 pb-0">
      <nav class="breadcrumb has-arrow-separator">
        <ul class="container is-size-6">
          <li><a class="has-text-grey">Techie Coffee</a></li>
          <li><a class="has-text-grey">Shop</a></li>
          <!-- <li><a class="has-text-warning-dark">Techie Coffee</a></li>
          <li><a class="has-text-warning-dark">Shop</a></li> -->
          <li class="is-active"><a>Docker Dark Roast</a></li>
        </ul>
      </nav>
    </div>

    <!-- product info -->
    <section class="section">
      <div class="container">
        <div class="columns is-vcentered is-multiline">
          <div class="column is-6-tablet is-5-desktop has-text-centered">
            <img src="https://static.toiimg.com/photo/67321906/kathmandu.jpg?width=740&resize=4" alt="Docker Coffee Image">
          </div>
          <div class="column is-6-tablet is-3-desktop">


          </div>

          <div class="column is-12-tablet is-4-desktop">
            <h1 class="is-size-3-mobile is-size-1-desktop title">Docker</h1>
            <h2 class="is-size-3-mobile is-size-2-desktop subtitle">Dark Roast</h2>
            <p class="mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam officiis ad illum eligendi provident itaque fuga nihil praesentium dignissimos quos!</p>
            <div class="is-size-4 mb-4">रु 1129</div>
            <p class="mb-4">By Chetan Kharel Travels Pvt. Ltd</p>
            <form>
<!--              <div class="control my-5">-->
<!--                <div class="select is-dark">-->
<!--                  <select>-->
<!--                    <option>Small (250g)</option>-->
<!--                    <option>Medium (500g)</option>-->
<!--                    <option>Large (750g)</option>-->
<!--                  </select>-->
<!--                </div>-->
<!--              </div>-->
              <div class="buttons">
                <b-button
                  label="Itinerary"
                  type="is-link"
                  icon-left="download" outlined/>
                <b-button
                  label="Buy"
                  type="is-link"
                  icon-left="cash" />
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
              <p class="title is-3">
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


      </div>
    </section>


    <section class="section">
      <div class="container">

        <div class="columns is-8 is-variable">

          <div class="column is-7-tablet">
            <!-- tabbed content -->
            <div class="tabs is-boxed">
              <ul>
                <li class="is-active" data-target="product-details">
                  <a>Includes</a>
                </li>
                <li data-target="delivery-info">
                  <a>Excludes</a>
                </li>
              </ul>
            </div>
            <div class="px-2" id="tab-content">
              <div id="product-details">
                <h3 class="is-size-5 title">Includes</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem nemo commodi ipsum iusto minima natus aliquid harum distinctio consequuntur perspiciatis, tempore expedita fugiat neque soluta! Dolores eius eaque dolor voluptatibus!</p>
              </div>
              <div class="is-hidden" id="delivery-info">
                <h3 class="is-size-5 title">Excludes</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem nemo commodi ipsum iusto minima natus aliquid harum distinctio consequuntur perspiciatis, tempore expedita fugiat neque soluta! Dolores eius eaque dolor voluptatibus!</p>
              </div>
            </div>
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

    <!-- cards -->
    <section class="section is-hidden-mobile">
      <div class="container">
        <h3 class="title has-text-centered is-size-4">Related Products</h3>
        <div class="columns mt-5 is-8 is-variable is-centered">
          <div class="column is-4-tablet is-3-desktop">
            <div class="card">
              <div class="card-image has-text-centered px-6">
                <img src="" alt="product">
              </div>
              <div class="card-content">
                <p>रु1339</p>
                <p class="title is-size-5">Ghorepani</p>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <a href="" class="has-text-grey">View Package</a>
                </p>
              </footer>
            </div>
          </div>
          <div class="column is-4-tablet is-3-desktop">
            <div class="card">
              <div class="card-image has-text-centered px-6">
                <img src="" alt="product">
              </div>
              <div class="card-content">
                <p>रु1339</p>
                <p class="title is-size-5">Dhampus</p>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <a href="" class="has-text-grey">View Package</a>
                </p>
              </footer>
            </div>
          </div>
          <div class="column is-4-tablet is-3-desktop">
            <div class="card">
              <div class="card-image has-text-centered px-6">
                <img src="" alt="product">
              </div>
              <div class="card-content">
                <p>रु1339</p>
                <p class="title is-size-5">Nagarkot</p>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <a href="" class="has-text-grey">View Package</a>
                </p>
              </footer>
            </div>
          </div>
        </div>
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
        <!-- <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto facere delectus officiis laudantium blanditiis ipsa sit, veritatis fugiat laboriosam eos. Dignissimos error voluptates aliquam molestias harum, fugit doloribus officiis libero.</p> <hr>
        <div class="has-text-right mt-3">
            <button class="button" id="cancel-modal">Cancel</button>
            <button class="button is-dark" id="success-modal">Join</button>
        </div> -->
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
