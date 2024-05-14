interface UserPayloadInterface {
    username: string;
    password: string;
}

interface LoginResponseInterface {
    token: {
        accessToken: string;
        refreshToken: number;
    }
}

interface authState {
    authenticated: boolean,
    loading: boolean,
    my: any
}

export interface myProfile {
    sub: string
    name: string
    email: string
    department: string
    birthdate: string
    picture: string
    permissions: string[]
}

export const useAuthStore = defineStore('websiteStore', {
    state: () => ({authenticated: false, loading: false, my: {}}),
    actions: {
        /**
         * kullanıcı authenticate işlemi
         * @param username
         * @param password
         */
        async authenticateUser({username, password}: UserPayloadInterface) {
            const token = useCookie('token'); // useCookie new hook in nuxt 3
            this.loading = true;
            const {data}: {
                data: {
                    value: any | LoginResponseInterface
                }
            } = await useAPI('/authenticate', {
                loadmask: true,
                method: "post",
                body: {
                    username,
                    password,
                }
            })
            this.loading = false;
            if (data.value.token) {
                /**
                 * token bilgisi cookie atanıyor
                 */
                token.value = data.value?.token?.accessToken; // set token to cookie
                this.me();
                this.authenticated = true; // set authenticated  state value to true
            }
        },
        /**
         * kullanıcı profil ve yetki bilgileri
         */
        async me() {
            this.loading = true;
            const {data, pending} = await useAPI('/me', {
                method: "get",
                loadmask:false,
            })
            /**
             * kullanıcı yetkilerinin takip edilebilmesi için
             */
            const userPermissions = usePermissions()
            userPermissions.value = (data.value as myProfile).permissions

            this.my = data.value as myProfile;
            this.loading = false;
        },
        /**
         * Kullanıcı sistemden çıkış işlemi.
         * @todo backend servise istek yapılmalı ve kullanıcı çıkış işlemi bildirilmeli. audit loglar için önemli.
         *
         */
        logUserOut() {
            const token = useCookie('token'); // useCookie new hook in nuxt 3
            this.authenticated = false; // set authenticated  state value to false
            this.my = {};
            token.value = null; // clear the token cookie
        },
    }
})
