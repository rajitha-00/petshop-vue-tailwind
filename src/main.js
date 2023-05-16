import { createApp } from 'vue'
import App from './App.vue'

import './index.css'
import router from './router'
import VueScrollTo from 'vue-scrollto'



const app = createApp(App)
app.use(router)
app.use(VueScrollTo)
app.mount('#app')