<template>
  <section class="section hero is-fullheight is-error-section">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-two-fifths">
            <card-component
              title="Reset Password"
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

                <b-field label="Confirm Password">
                  <b-input
                    v-model="form.password_confirmation"
                    type="password"
                    name="password_confirmation"
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
                      Reset Password
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
  data () {
    return {
      isLoading: false,
      form: {
        email: '',
        token: '',
        password: '',
        password_confirmation: ''
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
  },
  mounted() {
    this.form.email = this.$route.query.email;
    this.form.token = this.$route.params.token;
  },
}
</script>
