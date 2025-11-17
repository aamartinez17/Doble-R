// nuxt.config.js
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    'bootstrap/dist/css/bootstrap.min.css' // Bootstrap CSS
  ],

  app: {
    head: {
      title: 'Doble R Productions | Digital Marketing & Event Production',
      meta: [
        { name: 'description', content: 'Digital Marketing, Graphic Design, and Event Production services in New Market, VA.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        // Add Bootstrap Icons CDN here
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css' }
      ],
      script: [
        {
          // Bootstrap JS Bundle (required for toggles/modals)
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
          tagPosition: 'bodyClose'
        }
      ]
    }
  },

  compatibilityDate: '2025-01-01'
})