interface UserPayloadInterface {
    username: string;
    password: string;
}

export const useAuthStore = defineStore('websiteStore', {
    state: () => ({
        authenticated: false,
        loading: false,
        me: null
    }),
    actions: {
        async authenticateUser({username, password}: UserPayloadInterface) {
            const {data, pending} = await $fetch('https://api.nuxt.com/modules/pinia',
                {
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    body: {
                        username,
                        password,
                    }
                }
            )
            this.loading = "pending";
            if (data.value) {
                const token = useCookie('token'); // useCookie new hook in nuxt 3
                token.value = data?.value?.token; // set token to cookie
                this.authenticated = true; // set authenticated  state value to true
                this.me = data?.value
            }
        },
        logUserOut() {
            const token = useCookie('token'); // useCookie new hook in nuxt 3
            this.authenticated = false; // set authenticated  state value to false
            this.me = null;
            token.value = null; // clear the token cookie
        },
    }
})