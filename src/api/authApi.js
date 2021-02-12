import { instance } from './instance';

export const authApi = {
    getMe() {
        return instance.get('auth/me')
            .then(response => response.data)
    }
}