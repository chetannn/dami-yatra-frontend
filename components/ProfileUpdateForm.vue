<template>
  <card-component title="Edit Profile" icon="account-circle">
    <form @submit.prevent="submit">
      <b-field horizontal label="Avatar">
        <file-picker />
      </b-field>
      <hr />
      <b-field horizontal label="Name" message="Required. Your name">
        <b-input v-model="form.name" name="name" required />
      </b-field>
      <b-field horizontal label="E-mail" message="Required. Your e-mail">
        <b-input v-model="form.email" name="email" type="email" required />
      </b-field>

         <b-field horizontal label="Mobile" message="Your mobile">
        <b-input v-model="form.mobile" name="mobile" type="text" />
      </b-field>

      <hr />
      <b-field horizontal>
        <div class="control">
          <button
            type="submit"
            class="button is-primary"
            :class="{ 'is-loading': isLoading }"
          >
            Update Profile
          </button>
        </div>
      </b-field>
    </form>
  </card-component>
</template>

<script>
import FilePicker from '@/components/FilePicker'
import CardComponent from '@/components/CardComponent'
export default {
  name: 'ProfileUpdateForm',
  components: {
    CardComponent,
    FilePicker,
  },
  data() {
    return {
      isFileUploaded: false,
      isLoading: false,
      form: {
        name: this.$auth.user.name,
        email: this.$auth.user.email,
        mobile: ''
      },
    }
  },
  methods: {
    async submit() {
      this.isLoading = true
      try {
          await this.$axios.get('/sanctum/csrf-cookie')
          await this.$axios.post('/api/update-profile', this.form)

          this.$buefy.snackbar.open({
          message: 'Your profile has been updated',
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
