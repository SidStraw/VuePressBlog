import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import styl from '../styles/palette.styl'
// const styl = require('stylus')

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    console.log('stylus', siteData)
    Vue.use(ElementUI);
    Vue.use(Vuetify);
    options.vuetify = new Vuetify({
        theme: {
            themes: {
                light: {
                    primary: '#D3B793',
                    secondary: '#99B7A3',
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