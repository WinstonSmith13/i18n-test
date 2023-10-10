export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
  ],
   i18n: {
    locales: [
      {
        name: 'Français',
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr.js',
        icon: 'emojione:flag-for-france'
      },
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en.js',
        icon: 'emojione:flag-for-united-kingdom'
      }
    ],
    lazy: true,
    langDir: 'locales',
    fallbackLocale: 'fr',
    strategy: 'prefix',
    defaultLocale: 'fr'
  }
})