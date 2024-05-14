export function useAPI<T>(url: string | (() => string), options?: any) {
    return useFetch(url, {
        ...options,
        $fetch: useNuxtApp().$api,
    })
}
