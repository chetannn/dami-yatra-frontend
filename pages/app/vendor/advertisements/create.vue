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
      <form @submit.prevent="submit">
      <b-steps
        v-model="activeStep"
        :has-navigation="false"
      >
        <b-step-item step="1" label="Overview" :clickable="true">

          <card-component title="Overview" icon="ballot">

              <b-field label="Title" horizontal>
                <b-input
                  icon="account"
                  placeholder="Title"
                  name="title"
                  required
                  v-model="form.title"
                />
              </b-field>

              <b-field
                label="Description"
                message="Your description. Max 500 characters"
                horizontal
              >
                <b-input
                  type="textarea"
                  placeholder="Description of the advertisement"
                  maxlength="500"
                  required
                  name="description"
                  v-model="form.description"
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
                required
              />
            </b-field>

            <b-field label="Tags" horizontal>
              <b-taginput
                v-model="form.tags"
                ellipsis
                icon="label"
                placeholder="Add a tag"
                aria-close-label="Delete this tag">
              </b-taginput>
            </b-field>
          </card-component>
        </b-step-item>

        <b-step-item step="2" label="Highlights" :clickable="true">
          <card-component title="Highlights" icon="ballot">
            <b-field
              label="Duration"
              message="Duration is required"
              horizontal
            >
              <b-input
                type="text"
                required
                placeholder="eg. 4 days 5 nights"
                v-model="form.duration"
              />
            </b-field>


            <b-field label="Quantity" horizontal>
              <b-input type="number" required  v-model="form.quantity" />
            </b-field>

            <b-field label="Tour Start Date" horizontal>
              <b-datepicker v-model="form.tour_start_date" />
            </b-field>



          </card-component>

           <div class="columns is-three-quarters">
             <div class="column">
               <card-component title="Accommodations">
                 <b-input v-model="accommodation" type="text" placeholder="Type accommodation" />
                 <b-button class="mt-2" @click="addAccommodation" size="is-small" type="is-primary">Add</b-button>
                 <ul v-for="(accommodation, index) in accommodations" class="mt-4">
                   <li class="is-flex is-justify-content-space-between mb-2">
                     <strong>{{accommodation}}</strong>
                     <b-button size="is-small" type="is-danger" @click="removeAccommodation(index)" icon-left="delete" />
                   </li>
                 </ul>
               </card-component>
             </div>
             <div class="column">
               <card-component title="Activities">
                  <b-input v-model="activity" type="text" placeholder="Type in the activity" />
                   <b-button class="mt-2" @click="addActivity" size="is-small" type="is-primary">Add</b-button>
                     <ul v-for="(activity, index) in activities" class="mt-4">
                       <li class="is-flex is-justify-content-space-between mb-2">
                         <strong>{{activity}}</strong>
                         <b-button size="is-small" type="is-danger" @click="removeActivity(index)" icon-left="delete" />
                       </li>
                     </ul>
               </card-component>
             </div>
             <div class="column">
               <card-component title="Meals">
                 <b-input v-model="meal" type="text" placeholder="Type in the meal and press enter" />
                 <b-button class="mt-2" @click="addMeal" size="is-small" type="is-primary">Add</b-button>
                 <ul v-for="(meal, index) in meals" class="mt-4">
                   <li class="is-flex is-justify-content-space-between mb-2">
                     <strong>{{meal}}</strong>
                     <b-button size="is-small" type="is-danger" @click="removeMeal(index)" icon-left="delete" />
                   </li>
                 </ul>
               </card-component>
             </div>
           </div>


        </b-step-item>

        <b-step-item step="3" label="Documents" :clickable="true">

          <card-component title="Documents and Images" icon="ballot">

          <b-field label="Cover Picture" horizontal>
            <b-upload v-model="form.cover_image" drag-drop>
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


            <b-field label="File" horizontal>
              <file-picker v-model="form.itinerary_file" />
            </b-field>


          </card-component>

        </b-step-item>

        <b-step-item step="4" label="Publish" :clickable="true">
          <card-component title="Publish">
            <b-field label="Feature this advertisement ?" horizontal>
              <b-switch v-model="form.featured">
              </b-switch>
            </b-field>

            <b-field v-if="form.featured" grouped>
              <div class="control">
                <b-button  native-type="submit" type="is-primary"
                >Pay 1000 for 1 month</b-button>
                <b-button  native-type="submit" type="is-primary"
                >Pay 3000 for 3 months</b-button>
                <b-button  native-type="submit" type="is-primary"
                >Pay 6000 for 6 months</b-button>
                <b-button  native-type="submit" type="is-primary"
                >Pay 12000 for 12 months</b-button>
              </div>
            </b-field>


            <hr />
              <b-field grouped>
                <div class="control">
                  <b-button native-type="submit" type="is-primary"
                  >Publish</b-button>
                  <b-button @click="saveAsDraft">Save as draft</b-button>
                </div>
              </b-field>

          </card-component>

        </b-step-item>
      </b-steps>
      </form>
    </section>
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar'
import HeroBar from '@/components/HeroBar'
import AppError from '@/components/AppError'
import AdvertisementForm from '@/components/vendor/AdvertisementForm'

export default {
  layout: 'vendor',
  middleware: ['auth', 'verified', 'vendor'],
  name: 'Forms',
  components: {
    HeroBar,
    TitleBar,
    AppError,
    AdvertisementForm
  },
  data() {
    return {
      activeStep: 0,
      accommodation: '',
      meal: '',
      activity: '',
      accommodations: [],
      meals: [],
      activities: [],
      isLoading: false,
      errors: [],
      form: {
        title: null,
        description: null,
        tags: [],
        ad_end_date: null,
        itinerary_file: null,
        price: null,
        duration: null,
        cover_image: null,
        tour_start_date: null,
        quantity: null,
        status: 0,
        featured: 0
      },
    }
  },
  computed: {
    titleStack() {
      return ['Vendor', 'Advertisement', 'Create']
    },
  },
  methods: {
    addAccommodation() {
      this.accommodations.push(this.accommodation)
      this.accommodation = ''
    },
    removeAccommodation(index) {
      this.accommodations.splice(index, 1)
    },
    addActivity() {
      this.activities.push(this.activity)
      this.activity = ''
    },
    removeActivity(index) {
      this.activities.splice(index, 1)
    },
    addMeal() {
      this.meals.push(this.meal)
      this.meal = ''
    },
    removeMeal(index) {
      this.meals.splice(index, 1)
    },
    async publish() {
      this.form.status = 1
      await this.submit()
    },
    async saveAsDraft() {
      this.form.status = 0
      await this.submit()
    },
    async submit() {

      this.isLoading = true

      try {

          let date = this.$dayjs(this.$dayjs().format('YYYY-MM-DD')).add(1, 'month')
          this.form.ad_end_date = date.format('YYYY-MM-DD')

        if(this.form.tour_start_date) {
          this.form.tour_start_date = this.$dayjs(this.form.tour_start_date).format('YYYY-MM-DD')
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
        formData.append('quantity', this.form.quantity)
        formData.append('tour_start_date', this.form.tour_start_date)
        formData.append('status', this.form.status)

        if(this.meals.length > 0) {
          formData.append('meals[]', this.meals)
        }

        if(this.activities.length > 0) {
          formData.append('activities[]', this.activities)
        }

        if(this.accommodations.length > 0) {
          formData.append('accommodations[]', this.accommodations)
        }

        formData.append('featured', this.form.featured)

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
        // this.showError = true
        this.errors = Object.values(error.response.data.errors).flat();
        this.isLoading = false

      }

    },
  },
  head() {
    return {
      title: 'Add Advertisement - Dami Yatra',
    }
  },
}
</script>
