import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createNotivue } from 'notivue'

import App from './App.vue'
import router from './router/routes'

import 'notivue/notification.css'
import 'notivue/animations.css'
import 'notivue/notification-progress.css'

const notivue = createNotivue({
    position: 'top-right',
    notifications: {
        global: {
          duration: 10000
        }
    }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(notivue)

app.mount('#app')
