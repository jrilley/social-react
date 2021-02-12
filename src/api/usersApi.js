import { instance } from './instance';


export const usersApi = {
    getUsers(curPage = 1, count = 10) {
        return instance.get(`users?page=${curPage}&count=${count}`)
            .then(response => response.data)
    }
};
