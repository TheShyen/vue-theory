import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


createApp(App).directive('color', {
  mounted(el, binding, vnode, prevVnode,) {
    el.style.color = binding.value
    console.log('v-focus mounted',el, binding, vnode, prevVnode)
  }
}).mount('#app')

