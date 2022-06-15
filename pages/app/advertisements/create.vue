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

            <b-field>
              <b-input
                v-model="form.title"
                icon="account"
                placeholder="Name"
                name="name"
                required
              />
            </b-field>

          </b-field>

          <b-field label="Subject" message="Message subject" horizontal>
            <b-input
              v-model="form.subject"
              placeholder="e.g. Partnership proposal"
              required
            />
          </b-field>
          <b-field
            label="Description"
            message="Your description. Max 255 characters"
            horizontal
          >
            <b-input
              v-model="form.question"
              type="textarea"
              placeholder="Explain how we can help you"
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


          <hr />
          <b-field horizontal>
            <b-field grouped>
              <div class="control">
                <b-button native-type="submit" type="is-primary"
                >Submit</b-button
                >
              </div>
              <div class="control">
                <b-button type="is-primary is-outlined" @click="reset"
                >Reset</b-button
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
        email: null,
        phone: null,
        department: null,
        subject: null,
        question: null,
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
      return ['Admin', 'Forms']
    },
  },
  methods: {
    submit() {},
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
      title: 'Forms — Admin One Nuxt.js',
    }
  },
}
</script>
