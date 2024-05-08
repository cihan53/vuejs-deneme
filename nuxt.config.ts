// https://nuxt.com/docs/api/configuration/nuxt-config
import {isDevelopment} from "std-env";
import type {NuxtPage} from "@nuxt/schema";

export default defineNuxtConfig({
    ssr: false,
    css: ['~/assets/css/main.css'],
    devtools: {
        enabled: true
    },
    runtimeConfig: {
        public: {
            apiBase: process.env.API_BASE_URL || '/api'
        }
    },
    modules: ['nuxt-permissions', "@nuxt/ui", "@pinia/nuxt"],
    ui: {
        global: true,
    },
    colorMode: {
        preference: 'light'
    },
    app: {
        head: {
            bodyAttrs: {
                class: 'bg-white dark:bg-black',
            },
            title: 'Engineering Intelligence &amp; DORA Metrics Platform | Oobeya.io',
            meta: [
                {name: 'robots', content: isDevelopment ? 'noindex' : "index"},
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'}
            ]
        },
    },
    hooks: {
        'pages:extend'(pages) {
            function setMiddleware(pages: NuxtPage[]) {
                for (const page of pages) {
                    if (page.name != 'login') {
                        page.meta ||= {}
                        // Note that this will override any middleware set in `definePageMeta` in the page
                        page.meta.middleware = ['auth']
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
