// https://nuxt.com/docs/api/configuration/nuxt-config
import {isDevelopment} from "std-env";
import type {NuxtPage} from "nuxt/schema";

export default defineNuxtConfig({
    ssr: false,
    css: ['~/assets/css/main.css'],
    devtools: {enabled: true},
    modules: ['nuxt-permissions', "@nuxt/ui", "nuxt-auth-utils"],
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
                {name: 'robots', content: isDevelopment ? 'noindex' : "index"},
                {charset: 'utf-8'}, {name: 'viewport', content: 'width=device-width, initial-scale=1'}
            ]
        },
    },
    hooks: {
        'pages:extend'(pages) {
            function setMiddleware(pages: NuxtPage[]) {
                for (const page of pages) {
                    if (page.name == 'login') {
                        page.meta ||= {}
                        // Note that this will override any middleware set in `definePageMeta` in the page
                        page.meta.middleware = ['named']
                    }
                    if (page.children) {
                        setMiddleware(page.children)
                    }
                }
            }
            setMiddleware(pages)
        }
    }
})
