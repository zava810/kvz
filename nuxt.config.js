export default {
  target: 'static',
  head: {
    title: 'kvz',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    // "~layouts/global.css",
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
  ],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxt/content',
  ],
  content: {},
  build: {
  }
}
