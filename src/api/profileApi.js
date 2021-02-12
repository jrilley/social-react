import { instance } from './instance';

export const profileApi = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    }
}