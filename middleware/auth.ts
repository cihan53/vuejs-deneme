export default defineNuxtRouteMiddleware(() => {
    // skip middleware on server
    if (import.meta.server) return
    // skip middleware on client side entirely
    if (import.meta.client) return

    const { loggedIn } = useUserSession()

    console.log("defineNuxtRouteMiddleware")
    if (!loggedIn.value) {
        return navigateTo('/login')
    }
})
