<template>
  <card-component title="Change Password" icon="lock">
    <form @submit.prevent="submit">
      <b-field
        horizontal
        label="Current password"
        message="Required. Your current password"
      >
        <b-input
          v-model="form.current_password"
          name="current_password"
          type="password"
          required
          autcomplete="current-password"
        />
      </b-field>
      <hr />
      <b-field horizontal label="New password" message="Required. New password">
        <b-input
          v-model="form.password"
          name="password"
          type="password"
          required
          autocomplete="new-password"
        />
      </b-field>
      <b-field
        horizontal
        label="Confirm password"
        message="Required. New password one more time"
      >
        <b-input
          v-model="form.password_confirmation"
          name="password_confirmation"
          type="password"
          required
          autocomplete="new-password"
        />
      </b-field>
      <hr />
      <b-field horizontal>
        <div class="control">
          <button
            type="submit"
            class="button is-primary"
            :class="{ 'is-loading': isLoading }"
          >
            Change Password
          </button>
        </div>
      </b-field>
    </form>
  </card-component>
</template>

<script>
import CardComponent from '@/components/CardComponent'
export default {
  name: 'PasswordUpdateForm',
  components: {
    CardComponent,
  },
  data() {
    return {
      isLoading: false,
      form: {
        current_password: null,
        password: null,
        password_confirmation: null,
      },
    }
  },
  methods: {
   async submit() {
        this.isLoading = true
      try {
          await this.$axios.get('/sanctum/csrf-cookie')
          await this.$axios.put('/api/user/password', this.form)

          this.$buefy.snackbar.open({
          message: 'Your password has been changed',
          queue: false,
          }, 200)
             this.isLoading = false
      }
      catch(e) {
           this.isLoading = true
           throw e
      }
    },
  },
}
</script>
