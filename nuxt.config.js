
const webpack = require("webpack");

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato&family=Roboto&display=swap' }
    ],
    // script: [
    //     { src: 'http://localhost:3000/extjs/jquery.min.js', type: 'text/javascript' },
    // ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#555' },
  /*
  ** Global CSS
  */
  css: [
    "~/assets/css/base.css"
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
   { src: '~/plugins/router-loaded', mode: 'client' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    vendor: ["jquery"],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
  },
  router: { base: '/' },
}

