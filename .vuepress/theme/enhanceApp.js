import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  Vue.use(Vuetify)
  options.vuetify = new Vuetify({
    theme: {
      themes: {
        light: {
          primary: siteData?.themeConfig?.color?.$accentColor || '#1976D2',
          secondary: siteData?.themeConfig?.color?.$secondaryColor || '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
        },
      },
    },
  })

  // 中文hash解析
  if (typeof process === 'undefined' || process.env.VUE_ENV !== 'server') {
    router.onReady(() => {
      const { app } = router

      app.$once('hook:mounted', () => {
        setTimeout(() => {
          const { hash } = document.location
          if (hash.length > 1) {
            const id = decodeURIComponent(hash.substring(1))
            const element = document.getElementById(id)
            if (element) element.scrollIntoView()
          }
        }, 500)
      })
    })
  }
}
