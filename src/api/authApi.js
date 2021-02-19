import { instance } from './instance';

export const authApi = {
    me() {
        return instance.get('auth/me')
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout(email, password, rememberMe) {
        return instance.delete(`auth/login`)
    }
}