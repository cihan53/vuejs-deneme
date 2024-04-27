// https://nuxt.com/docs/api/configuration/nuxt-config
import {isDevelopment} from "std-env";

export default defineNuxtConfig({

  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  ui: {
    global: true,
    primary: 'green',
    gray: 'cool'
  },
  app: {
    head: {
      // bodyAttrs: {
      //   class: 'dark dark:bg-black',
      // },
      title: 'Engineering Intelligence &amp; DORA Metrics Platform | Oobeya.io',
      meta: [
        {name: 'robots', content: isDevelopment?'noindex':"index"},
        {charset: 'utf-8'}, {name: 'viewport', content: 'width=device-width, initial-scale=1'}
      ]
    },
  },
})
