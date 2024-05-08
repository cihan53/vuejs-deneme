interface UserPayloadInterface {
    username: string;
    password: string;
}

interface LoginResponseInterface {
    token:{
        accessToken: string;
        refreshToken: number;
    }
}
export const useAuthStore = defineStore('websiteStore', {
    state: () => ({
        authenticated: false,
        loading: false,
        me: {}
    }),
    actions: {
        authenticateUser: async function ({username, password}: UserPayloadInterface) {
            const config = useRuntimeConfig()
            this.loading = true;
            const response: LoginResponseInterface = await $fetch(`${config.public.apiBase}/authenticate`,
                {
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    body: {
                        username,
                        password,
                    }
                }
            )
            this.loading = false;
            if (response.token) {
                const token = useCookie('token'); // useCookie new hook in nuxt 3
                token.value = response?.token?.accessToken; // set token to cookie
                this.authenticated = true; // set authenticated  state value to true
                this.me = response.token
            }
        },
        logUserOut() {
            const token = useCookie('token'); // useCookie new hook in nuxt 3
            this.authenticated = false; // set authenticated  state value to false
            this.me = {};
            token.value = null; // clear the token cookie
        },
    }
})
