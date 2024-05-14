export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()
    const token = useCookie('token'); // useCookie new hook in nuxt 3

    /**
     * @todo burası incelenecek
     * eğer yeni bir instance oluşturulmadan yapılıyormu bakılacak.
     *  // $fetch("/abc",{baseURL:"/sdfasdf",onRequest()})
     */

    const {progress, isLoading, start, finish, clear} = useLoadingIndicator({
        duration: 2000,
        throttle: 200,
    })

    const $api = $fetch.create({
        baseURL: config.public.apiBase,
        headers: {'Content-Type': 'application/json'},
        onRequest({request, options, error}) {
            /**
             * loadmask özelliği varsayılan olarak eklendi.
             */
            if (!options.hasOwnProperty('loadmask') || options.loadmask==true ) {
                console.log("load mast ","start")
                start();
            }

            if (token.value) {
                // Add Authorization header
                options.headers = options.headers || {}
                //@ts-ignore
                options.headers.Authorization = `Bearer ${token.value}`
            }
        },
        onResponseError({response}) {
            if (response.status === 401) {
                navigateTo('/login')
            }
        },
        onResponse({response}) {
            console.log("load mast ","stop")
            finish();
        }

    })
    // Expose to useNuxtApp().$api
    return {
        provide: {
            api: $api
        }
    }
})
