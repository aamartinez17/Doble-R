// plugins/aos.client.js
import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== 'undefined') {
    nuxtApp.hook('app:mounted', () => {
      AOS.init({
        duration: 800,       // Animation duration in ms
        easing: 'ease-in-out',
        once: true,          // Animation happens only once while scrolling
        offset: 100,
      })
    })
  }
})