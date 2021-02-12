import { instance } from './instance';

export const followApi = {
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`, {})
            .then(response => response.data)
    }
};