<template>
  <card-component title="Edit Profile" icon="account-circle">
    <form @submit.prevent="submit">
      <b-field class="file is-primary" :class="{'has-name': !!form.profile_picture}" horizontal label="Avatar">
          <b-upload v-model="form.profile_picture" class="file-label">
            <span class="file-cta">
                <b-icon class="file-icon" icon="upload"></b-icon>
                <span class="file-label">Choose Avatar</span>
            </span>
            <span class="file-name" v-if="form.profile_picture">
                {{ form.profile_picture.name }}
            </span>
          </b-upload>
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
        name: '',
        email: this.$auth.user.email,
        mobile: '',
        profile_picture: null
      },
    }
  },
  methods: {
    async submit() {
      this.isLoading = true
      try {

        let name = this.form.name
        let formData = new FormData()
        formData.append('name', name)

        if(this.form.profile_picture) {
          formData.append('profile_picture', this.form.profile_picture)
        }

        const response = await this.$axios.post('/api/update-profile', formData, {
          headers:  {
                  'Content-Type': 'multipart/form-data'
                },
        })

          this.$buefy.snackbar.open({
          message: 'Your profile has been updated',
          queue: false,
          }, 200)

        this.$auth.setUser(response.data)

             this.isLoading = false

      }
      catch(e) {
           this.isLoading = true
           throw e
      }

    },
  },
  mounted() {
    this.form.name = this.$auth.user.name
  }
}
</script>
