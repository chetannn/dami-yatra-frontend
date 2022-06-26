<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Profile
      <nuxt-link slot="right" to="/" class="button">
        Dashboard
      </nuxt-link>
    </hero-bar>
    <section class="section is-main-section">
      <tiles>
        <profile-update-form class="tile is-child" />
        <card-component title="Profile" icon="account" class="tile is-child">
          <user-avatar :avatar="$auth.user.profile_picture_url" class="image has-max-width is-aligned-center" />
          <hr />
          <b-field label="Name">
            <b-input :value="$auth.user.name" custom-class="is-static" readonly />
          </b-field>
          <hr />
          <b-field label="E-mail">
            <b-input :value="$auth.user.email" custom-class="is-static" readonly />
          </b-field>
        </card-component>
      </tiles>
      <password-update-form />
    </section>
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar'
import HeroBar from '@/components/HeroBar'
import Tiles from '@/components/Tiles'
import PasswordUpdateForm from '@/components/PasswordUpdateForm'
import ProfileUpdateForm from '@/components/ProfileUpdateForm'

export default {
   layout: 'app',
  name: "profile",
  middleware: ['auth', 'verified'],
  components: {
    TitleBar,
    HeroBar,
    Tiles,
    PasswordUpdateForm,
    ProfileUpdateForm
  },
  computed: {
    titleStack() {
      return ['Vendor', 'Profile']
    },
  },
}
</script>

<style scoped>

</style>
