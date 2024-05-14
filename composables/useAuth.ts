import {storeToRefs} from 'pinia'; // import storeToRefs helper hook from pinia
import {useAuthStore} from '~/store/auth'; // import the auth store we just created

export function useAuth() {

    const {authenticateUser,loading} = useAuthStore();
    const {authenticated,my} = storeToRefs(useAuthStore());
    return {
        loading,
        isAuthenticated: authenticated,
        my
    }
}
