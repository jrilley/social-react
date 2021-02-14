import {authApi} from "../api/authApi";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state
    }
};

export const getMe = () => (dispatch) => {
    authApi.getMe().then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setUserData(id, login, email));
        }
    });
}

export const setUserData = (userId, login, email) => ({ type: SET_USER_DATA, data: {
    userId, login, email
} });

export default authReducer;