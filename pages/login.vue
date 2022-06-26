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
              title="Login"
              icon="lock"
            >

              <form
                method="POST"
                @submit.prevent="submit"
              >
                <b-field label="E-mail Address">
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

                <b-field>
                  <b-checkbox
                    v-model="form.remember"
                    type="is-black"
                    class="is-thin"
                  >
                    Remember me
                  </b-checkbox>
                </b-field>

                <hr>

                <b-field grouped>
                  <div class="control">
                    <b-button
                      native-type="submit"
                      type="is-black"
                      :loading="isLoading"
                    >
                      Login
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
  middleware: ['guest'],
  name: 'Login',
  components: { CardComponent },
  data () {
    return {
      isLoading: false,
      errors: [],
      showError: false,
      form: {
        email: 'chetan@gmail.com',
        password: 'password',
        remember: false
      }
    }
  },
  head() {
    return {
      title: 'Login — Dami Yatra',
    }
  },
  methods: {
    submit () {

      this.isLoading = true

      this.$auth.loginWith('local', {
        data: this.form
      })
        .then(() => {
          this.isLoading = false
          this.$router.push('/app')
        })
        .catch(error => {
          if (error.response.status !== 422) throw error
          this.showError = true
          this.errors = Object.values(error.response.data.errors).flat();
          this.isLoading = false
        })

    }
  }
}
</script>
