import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import router from './router'

// Improve ResizeObserver error handling
const originalError = window.console.error
window.console.error = (...args) => {
  if (args[0] instanceof Error) {
    if (args[0].message.includes('ResizeObserver') || 
        args[0].stack?.includes('ResizeObserver')) {
      return
    }
  }
  originalError.apply(window.console, args)
}

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')