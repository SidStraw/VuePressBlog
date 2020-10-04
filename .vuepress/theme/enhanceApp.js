import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import '@mdi/font/css/materialdesignicons.css'

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    console.log('siteData', siteData)
    Vue.use(Vuetify);
    options.vuetify = new Vuetify({
        theme: {
            themes: {
                light: {
                    primary: '#99B7A3',
                    secondary: '#84969C',
                    accent: '#82B1FF',
                    error: '#FF5252',
                    info: '#2196F3',
                    success: '#4CAF50',
                    warning: '#FFC107',
                },
            },
        },
    })
}