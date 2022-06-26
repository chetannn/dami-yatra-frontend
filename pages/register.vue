<template>
  <section class="section hero is-fullheight is-error-section">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-two-fifths">

            <b-message
              v-if="errors.length > 0"
              title="Whoops! Something went wrong."
              auto-close
              :closable="false"
              v-model="showError"
              :duration="4000"
              type="is-danger"
              aria-close-label="Close message">
              <ul>
                <li v-for="(error,key) in errors" :key="key">{{error}}</li>
              </ul>
            </b-message>

            <card-component
              title="Register"
              icon="lock"
            >

              <form
                method="POST"
                @submit.prevent="submit"
              >

                <b-field label="Register as ?">
                  <b-radio v-model="form.type"
                           name="customer"
                           native-value="0"
                           >
                    Customer
                  </b-radio>
                  <b-radio v-model="form.type"
                           name="vendor"
                           native-value="1"
                           >
                    Vendor
                  </b-radio>
                </b-field>

                <b-field label="First Name">
                  <b-input
                    v-model="form.first_name"
                    name="first_name"
                    type="text"
                    required
                  />
                </b-field>

                <b-field label="Last Name">
                  <b-input
                    v-model="form.last_name"
                    name="last_name"
                    type="text"
                    required
                  />
                </b-field>


                <b-field label="Email">
                  <b-input
                    v-model="form.email"
                    name="email"
                    type="email"
                    required
                  />
                </b-field>

                <b-field label="Password">
                  <b-input
                    v-model="form.password"
                    type="password"
                    name="password"
                    password-reveal
                    required
                  />
                </b-field>

                <b-field label="Confirm Password">
                  <b-input
                    v-model="form.password_confirmation"
                    type="password"
                    name="password_confirmation"
                    password-reveal
                    required
                  />
                </b-field>


                <hr>

                <b-field grouped>
                  <div class="control">
                    <b-button
                      native-type="submit"
                      type="is-black"
                      :loading="isLoading"
                    >
                      Register
                    </b-button>
                  </div>

                </b-field>
              </form>
            </card-component>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-foot has-text-centered">
      <div class="logo" />
    </div>
  </section>

</template>


<script>
import CardComponent from '@/components/CardComponent.vue'

export default {
  name: 'Login',
  components: { CardComponent },
  middleware: 'guest',
  data () {
    return {
      isLoading: false,
      showError: false,
      errors: [],
      form: {
        email: 'chetan@gmail.com',
        first_name: 'Chetan',
        last_name: 'Kharel',
        password: 'password',
        password_confirmation: 'password',
        remember: false,
        type: 0
      }
    }
  },
  methods: {
    async submit () {
      this.isLoading = true
      try {

        const { status }  = await this.$axios.post('/api/register', this.form)

        if(status === 201) {
          this.$router.push('/verify');
        }

        this.$buefy.snackbar.open({
          message: 'Please check your inbox and verify email',
          queue: false,
        }, 5000)

        this.isLoading = false
      }
      catch(error) {
            if (error.response.status !== 422) throw error
            this.showError = true
            this.errors = Object.values(error.response.data.errors).flat();
            this.isLoading = false
      }

    }
  }
}
</script>
