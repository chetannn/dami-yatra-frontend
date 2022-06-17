<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
       Create Advertisement
      <nuxt-link slot="right" to="/" class="button">
        Dashboard
      </nuxt-link>
    </hero-bar>
    <section class="section is-main-section">
      <card-component title="Advertisement" icon="ballot">
        <form @submit.prevent="submit">

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


          <b-field label="Advertisements Valid until?" class="has-check" horizontal>
            <checkbox-picker
              v-model="customElementsForm.checkbox"
              :options="{ lorem: '1 month', ipsum: '3 months', dolore: '4 months' }"
              type="is-primary"
            />
          </b-field>

          <b-field label="File" horizontal>
            <file-picker v-model="customElementsForm.file" />
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
                <b-button native-type="submit" type="is-primary"
                >Save</b-button
                >
              </div>
            </b-field>
          </b-field>

        </form>
      </card-component>
    </section>
  </div>
</template>

<script>
import mapValues from 'lodash/mapValues'
import TitleBar from '@/components/TitleBar'
import CardComponent from '@/components/CardComponent'
import CheckboxPicker from '@/components/CheckboxPicker'
import RadioPicker from '@/components/RadioPicker'
import FilePicker from '@/components/FilePicker'
import HeroBar from '@/components/HeroBar'

export default {
  layout: 'app',
  name: 'Forms',
  components: {
    HeroBar,
    FilePicker,
    RadioPicker,
    CheckboxPicker,
    CardComponent,
    TitleBar,
  },
  data() {
    return {
      isLoading: false,
      form: {
        title: null,
        description: null,
        is_published: false,
        tags: [],
        ad_end_date: '2022-04-05'
      },
      customElementsForm: {
        checkbox: [],
        radio: null,
        switch: true,
        file: null,
      },
      departments: ['Business Development', 'Marketing', 'Sales'],
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
          await this.$axios.get('/sanctum/csrf-cookie')
          await this.$axios.post('/api/vendor/advertisements', this.form)
            this.$buefy.snackbar.open({
              message: 'Advertisement created successfully',
              queue: false,
         }, 2000)

         this.$router.push('/app/advertisements')
     }

     catch(e) {
         this.isLoading = true
         throw e
     }

    },
    reset() {
      this.form = mapValues(this.form, (item) => {
        if (item && typeof item === 'object') {
          return []
        }
        return null
      })
      this.$buefy.snackbar.open({
        message: 'Reset successfully',
        queue: false,
      })
    },
  },
  head() {
    return {
      title: 'Add Advertisement',
    }
  },
}
</script>
