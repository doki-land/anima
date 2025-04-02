import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import fluentVue from './i18n'

const app = createApp(App)
app.use(router)
app.use(fluentVue)
app.mount('#app')