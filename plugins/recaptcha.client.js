import { defineNuxtPlugin } from '#app'
import { install } from 'vue3-recaptcha-v2'

export default defineNuxtPlugin((nuxtApp) => {
  // Get the key from runtime config (see Step 2)
  const config = useRuntimeConfig()

  nuxtApp.vueApp.use(install, {
    sitekey: config.public.recaptchaSiteKey,
    cnDomains: false, // Set to true if you are in China
  })
})