import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/routes'
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

createApp(App)
.use(router)
.use(BootstrapVue)
.use(IconsPlugin)
.mount('#app')
