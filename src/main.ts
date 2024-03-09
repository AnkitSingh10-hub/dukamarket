import { Quasar, Notify, LocalStorage, Dialog } from 'quasar'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// Import icon libraries
// Import Quasar css
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(Quasar, {
  plugins: {
    Notify,
    Dialog,
    LocalStorage
  },
  config: {
    notify: {
      position: 'top-right',
      progress: true,
      timeout: 2500,
      actions: [
        {
          icon: 'close',
          color: 'white',
          attrs: { round: true, 'aria-label': 'Close' }
        }
      ]
    }
  }
})

app.mount('#app')
// FILE: main.js
