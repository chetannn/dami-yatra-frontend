<template>
  <section class="section hero is-fullheight is-error-section">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-two-fifths">
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
  middleware: 'guest',
  name: 'Login',
  components: { CardComponent },
  data () {
    return {
      isLoading: false,
      form: {
        email: 'chetan@gmail.com',
        password: 'password',
        remember: false
      }
    }
  },
  methods: {
    submit () {

      this.isLoading = true

      this.$auth.loginWith('laravelSanctum', {
        data: this.form
      })
        .then(() => {
          this.$router.push('/app')
        })

    }
  }
}
</script>
