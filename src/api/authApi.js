import { instance } from './instance';

export const authApi = {
    getMe() {
        return instance.get('auth/me')
            .then(response => response.data)
    },
    login(email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe }).then(response => response.data)
    },
    logout(email, password, rememberMe) {
        return instance.delete(`auth/login`).then(response => response.data)
    }
}