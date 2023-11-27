import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faHandHoldingDollar,
  faBookOpen,
  faQuestion,
  faUserTie
} from '@fortawesome/free-solid-svg-icons'

library.add(faHandHoldingDollar, faBookOpen, faQuestion, faUserTie)

const app = createApp(App)

app.use(createPinia())
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
