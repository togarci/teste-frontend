import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import axios from 'axios';

axios.defaults.baseURL= 'https://pokeapi.co/api/v2/'
axios.defaults.headers.common['Content-Type'] = 'application/json'

createApp(App).use(Quasar, quasarUserOptions).use(store).use(router).mount('#app')
