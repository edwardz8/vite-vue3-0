import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import router from '@/router'

createApp(App).use(router).use(createPinia()).mount('#app')
