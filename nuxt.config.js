export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dami-yatra-frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Nunito',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://cdn.materialdesignicons.com/4.9.95/css/materialdesignicons.min.css',
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss'
  ],
  // router: {
  //   middleware: ['auth']
  // },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/khalti.js', mode: 'client' },
    {src: '~/plugins/flatPicker.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    ['nuxt-buefy', { materialDesignIcons: false }],
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/dotenv',
    '@nuxtjs/dayjs',
  ],
  dayjs: {
    plugins: [
      'relativeTime'
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BACKEND_URL,
    credentials: true,
  },
  auth: {
    // strategies: {
    //   'laravelSanctum': {
    //     provider: 'laravel/sanctum',
    //     url: process.env.BACKEND_URL,
    //     endpoints: {
    //       login: {
    //         url: '/api/login'
    //       },
    //       logout: {
    //         url: '/api/logout'
    //       }
    //     },
    //     redirect: {
    //        login: '/login',
    //        logout: '/'
    //     }
    //   }
    // }
    strategies: {
       local: {
         url: process.env.BACKEND_URL,
         token: {
           property: 'token',
           global: true
         },
         user: {
           property: false,
         },
         endpoints: {
           login: {
             url: '/api/login'
           },
           user: {
             url: '/api/user'
           }
         }

       }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
