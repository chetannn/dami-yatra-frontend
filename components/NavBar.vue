<template>
  <nav
    v-show="isNavBarVisible"
    id="navbar-main"
    class="navbar is-fixed-top"
  >
    <div class="navbar-brand">
      <a
        class="navbar-item is-hidden-desktop"
        @click.prevent="asideToggleMobile"
      >
        <b-icon :icon="asideMobileIcon" />

      </a>
      <a
        class="navbar-item is-hidden-touch is-hidden-widescreen is-desktop-icon-only"
        @click.prevent="asideDesktopOnlyToggle"
      >

        <b-icon icon="menu" />

      </a>


<!--      <div class="navbar-item has-control no-left-space-touch no-left-space-desktop-only">-->
<!--        <div class="control">-->
<!--          <input-->
<!--            class="input"-->
<!--            placeholder="Search everywhere..."-->
<!--          >-->
<!--        </div>-->
<!--      </div>-->
    </div>
    <div class="navbar-brand is-right">
      <a
        class="navbar-item navbar-item-menu-toggle is-hidden-desktop"
        @click.prevent="menuToggle"
      >
        <b-icon
          :icon="menuToggleIcon"
          custom-size="default"
        />
      </a>
    </div>

    <div
      class="navbar-menu fadeIn animated faster"
      :class="{ 'is-active': isMenuActive }"
    >
      <div class="navbar-end">

        <nav-bar-menu v-if="$auth.loggedIn" class="has-divider has-user-avatar">
          <user-avatar :avatar="$auth.user.profile_picture_url" />
          <div class="is-user-name">
            <span>{{ $auth.user.name }}</span>
          </div>

          <div
            slot="dropdown"
            class="navbar-dropdown"
          >
            <nuxt-link
              to="/app/profile"
              class="navbar-item"
              exact-active-class="is-active"
            >
              <b-icon
                icon="account"
                custom-size="default"
              />
              <span>My Profile</span>
            </nuxt-link>

            <a class="navbar-item">
              <b-icon
                icon="settings"
                custom-size="default"
              />
              <span>Settings</span>
            </a>
            <a class="navbar-item">
              <b-icon
                icon="email"
                custom-size="default"
              />
              <span>Messages</span>
            </a>
            <hr class="navbar-divider">
            <a @click.prevent="logout" class="navbar-item">
              <b-icon
                icon="logout"
                custom-size="default"
              />
              <span>Log Out</span>
            </a>
          </div>
        </nav-bar-menu>


        <a
          v-if="$auth.loggedIn"
          class="navbar-item is-desktop-icon-only"
          title="Log out"
          @click="logout"
        >
          <b-icon
            icon="logout"
            custom-size="default"
          />
          <span>Log out</span>
        </a>

        <nuxt-link to="/login" v-if="!$auth.loggedIn" class="navbar-item">
          Login
        </nuxt-link>

        <nuxt-link to="/register" v-if="!$auth.loggedIn" class="navbar-item">
          Register
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
import NavBarMenu from '@/components/NavBarMenu.vue'
import UserAvatar from '@/components/UserAvatar.vue'

export default {
  name: 'NavBar',
  components: {
    UserAvatar,
    NavBarMenu
  },
  data () {
    return {
      isMenuActive: false
    }
  },
  computed: {
    asideMobileIcon () {
      return this.isAsideMobileExpanded ? 'backburger' : 'forwardburger'
    },
    menuToggleIcon () {
      return this.isMenuActive ? 'close' : 'dots-vertical'
    },
    ...mapState([
      'isAsideMobileExpanded',
      'isNavBarVisible',
    ])
  },
  mounted () {
    this.$router.afterEach(() => {
      this.isMenuActive = false
    })
  },
  methods: {
    asideToggleMobile () {
      this.$store.commit('asideMobileStateToggle')
    },
    asideDesktopOnlyToggle () {
      this.$store.dispatch('asideDesktopOnlyToggle')
    },
    menuToggle () {
      this.isMenuActive = !this.isMenuActive
    },
    async logout () {
        await this.$auth.logout()
    }
  }
}
</script>
