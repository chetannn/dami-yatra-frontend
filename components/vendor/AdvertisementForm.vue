<template>
  <div>

      <AppError :errors="errors" v-model="showError" />

      <card-component title="Advertisement" icon="ballot">
        <form @submit.prevent="submit">

          <b-field label="Cover Picture" horizontal>
            <b-upload v-model="form.cover_image"
                      drag-drop>
              <section class="section">
                <div class="content has-text-centered">
                  <p>
                    <b-icon
                      icon="upload"
                      size="is-large">
                    </b-icon>
                  </p>
                  <p>Drop cover picture for advertisement</p>
                </div>
              </section>
            </b-upload>

          </b-field>

          <b-field v-if="form.cover_image" horizontal>
            <div class="tags" v-if="form.cover_image">
            <span
              class="tag is-primary" >
                {{form.cover_image.name}}
                <button class="delete is-small"
                        type="button"
                >
                </button>
            </span>
            </div>
          </b-field>


          <b-field label="Title" horizontal>
            <b-input
              v-model="form.title"
              icon="account"
              placeholder="Title"
              name="title"
              required
            />
          </b-field>

          <b-field
            label="Description"
            message="Your description. Max 255 characters"
            horizontal
          >
            <b-input
              v-model="form.description"
              type="textarea"
              placeholder="Description of the advertisement"
              maxlength="255"
              required
            />
          </b-field>


          <b-field
            label="Duration"
            message="Duration is required"
            horizontal
          >
            <b-input
              v-model="form.duration"
              type="text"
              required
            />
          </b-field>


          <b-field
            label="Price"
            message="Price is required"
            horizontal
          >
            <b-input
              v-model="form.price"
              type="number"
              placeholder="Price will be inclusive of tax"
              required
            />
          </b-field>


          <b-field label="Advertisements Valid until?" class="has-check" horizontal>
            <radio-picker
              v-model="ad_expiration"
              :options="{ 1: '1 month', 3: '3 months', 6: '6 months', 12: '12 months' }"
              type="is-primary"
            />

          </b-field>

          <b-field label="File" horizontal>
            <file-picker v-model="form.itinerary_file" />
          </b-field>

          <b-field label="Tags" horizontal>
            <b-taginput
              ellipsis
              v-model="form.tags"
              icon="label"
              placeholder="Add a tag"
              aria-close-label="Delete this tag">
            </b-taginput>
          </b-field>

          <b-field label="Publish" horizontal>
            <b-switch v-model="form.is_published">
            </b-switch>
          </b-field>

          <hr />
          <b-field horizontal>
            <b-field grouped>
              <div class="control">
                <b-button :loading="isLoading" native-type="submit" type="is-primary"
                >Save</b-button
                >
              </div>
            </b-field>
          </b-field>

        </form>
      </card-component>
  </div>
</template>

<script>
import CardComponent from '@/components/CardComponent'
import CheckboxPicker from '@/components/CheckboxPicker'
import RadioPicker from '@/components/RadioPicker'
import FilePicker from '@/components/FilePicker'
import AppError from "@/components/AppError";

export default {
  components: {
    FilePicker,
    RadioPicker,
    CheckboxPicker,
    CardComponent,
    AppError
  },
  props: {
    advertisement: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      isLoading: false,
      errors: [],
      showError: false,
      ad_expiration: 1,
      form: {
        title: null,
        description: null,
        is_published: 0,
        tags: [],
        ad_end_date: null,
        itinerary_file: null,
        price: null,
        duration: null,
        cover_image: null,
      },
    }
  },
  computed: {
    titleStack() {
      return ['Vendor', 'Advertisement', 'Create']
    },
  },
  methods: {
    async submit() {

      this.isLoading = true

      try {

        if(this.ad_expiration) {
          let date = this.$dayjs().add(this.ad_expiration, 'month')
          this.form.ad_end_date = date.format('YYYY-MM-DD')
        }

        let formData = new FormData()
        formData.append('itinerary_file', this.form.itinerary_file)
        formData.append('cover_image', this.form.cover_image)
        formData.append('title', this.form.title)
        formData.append('description', this.form.description)
        formData.append('tags[]', this.form.tags)
        formData.append('price', this.form.price)
        formData.append('duration', this.form.duration)
        formData.append('ad_end_date', this.form.ad_end_date)
        formData.append('is_published', this.form.is_published)

        const response = await this.$axios.post('/api/vendor/advertisements', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })

        this.$buefy.snackbar.open({
          message: 'Advertisement created successfully',
          queue: false,
        }, 2000)

        this.$router.push('/app/vendor/advertisements')
      }

      catch(error) {

        if (error.response.status !== 422) throw error
        this.showError = true
        this.errors = Object.values(error.response.data.errors).flat();
        this.isLoading = false

      }

    },

  }

}
</script>
