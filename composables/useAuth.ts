import {storeToRefs} from 'pinia'; // import storeToRefs helper hook from pinia
import {useAuthStore} from '~/store/auth'; // import the auth store we just created

export function useAuth() {

    const {authenticateUser} = useAuthStore();
    const {authenticated,me} = storeToRefs(useAuthStore());
    return {
        isAuthenticated: authenticated,
        me
    }
}
