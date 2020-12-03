// import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)

  head: {
    titleTemplate: '%s rogersovich',

    title: '',

    meta: [
      { charset: 'utf-8' },

      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui',
      },

      { hid: 'description', name: 'description', content: '' },
    ],

    link: [{ rel: 'icon', type: 'image/x-icon', href: '/devil2.svg' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)

  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)

  plugins: [
    { src: '~/plugins/axios.js' },
    { src: '~/plugins/persistedState.js' },
    { src: '~/plugins/TiptapVuetify.js' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)

  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)

  buildModules: [
    // https://go.nuxtjs.dev/eslint

    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)

  modules: [
    // https://go.nuxtjs.dev/axios
    'vue-sweetalert2/nuxt',
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)

  axios: {},

  loading: {
    color: '#005AFF',
    height: '3px',
    failedColor: '#FF003D',
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)

  build: {
    transpile: ['vuetify/lib', 'tiptap-vuetify'],
  },

  tailwindcss: {
    config: {
      prefix: 'tw-',
      important: true,
      theme: {
        extend: {
          fontFamily: {
            montserrat: ['Montserrat'],
            'open-sans': ['Open Sans'],
          },
          textColor: {
            main: '#071E48',
            secondary: '#939BC1',
            accent: '#005AFF',
          },
          backgroundImage: {
            'contact-waves':
              "url('https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/waves_K4ASwAog6F5C.svg')",
          },
        },
      },
    },
  },
}
