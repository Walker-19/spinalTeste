import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import './assets/index.css'

const app = createApp(App);
app.use(MotionPlugin);


app.mount('#app')
