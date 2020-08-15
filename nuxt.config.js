
const webpack = require("webpack");
export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  loading: { color: '#555' },
  css: [
    "~/assets/css/base.css"
  ],
  plugins: [
   { src: '~/plugins/router-loaded', mode: 'client' },
  ],
  buildModules: [
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  axios: {
  },
  build: {
    vendor: ["jquery"],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
  },
  router: { base: '/focus/' },
}