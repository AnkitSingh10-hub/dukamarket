import { Quasar, Notify, LocalStorage, Dialog } from 'quasar'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@/assets/css/plugins.min.css'
import '@/assets/css/style.min.css'
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'


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
app.use(VueViewer)
app.mount('#app')
// FILE: main.js
