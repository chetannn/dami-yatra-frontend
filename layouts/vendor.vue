<template>
  <div id="app">
    <nav-bar />
    <aside-menu :menu="menu" />
    <nuxt />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import AsideMenu from '@/components/AsideMenu.vue'

export default {
  name: 'Home',
  components: {
    AsideMenu,
    NavBar
  },
  data () {
    return {
      menu: [
        'General',
        [
          {
            to: '/app',
            icon: 'desktop-mac',
            label: 'Dashboard'
          }
        ],
        'Mains',
        [
          {
            to: '/app/vendor/advertisements',
            label: 'Advertisements',
            icon: 'table',
            // updateMark: true
          },
          {
            to: '/app/vendor/coupons',
            label: 'Coupons',
            icon: 'ticket',
            // updateMark: true
          },
          {
            to: '/app/vendor/customer-payments',
            label: 'Customer Payments',
            icon: 'credit-card-outline'
          },
          {
            to: '/app/vendor/featured-payments',
            label: 'Featured Payments',
            icon: 'playlist-star'
          },
          // {
          //   to: '/forms',
          //   label: 'Forms',
          //   icon: 'square-edit-outline'
          // },
          {
            to: '/app/profile',
            label: 'Profile',
            icon: 'account-circle'
          },
          // {
          //   to: '/login',
          //   label: 'Login',
          //   icon: 'lock'
          // },
        ],
      ]
    }
  },
  created () {
  },

  mounted() {
    document.documentElement.classList.add('has-aside-left')
    document.documentElement.classList.add('has-aside-mobile-transition')
    document.documentElement.classList.add('has-navbar-fixed-top')
    document.documentElement.classList.add('has-aside-expanded')
  },

}
</script>
