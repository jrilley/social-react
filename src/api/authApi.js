import { instance } from './instance';

export const authApi = {
    getMe() {
        return instance.get('auth/me')
            .then(response => response.data)
    },
    login(email, password) {
        return instance.post(`auth/login`, {email, password}).then(response => response.data)
    }
}