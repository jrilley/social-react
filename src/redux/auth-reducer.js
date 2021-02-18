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
                ...action.data
            };
        default:
            return state
    }
};

export const setUserData = (userId, login, email, isAuth) => ({ type: SET_USER_DATA, data: {userId, login, email, isAuth}});
export const getMe = () => (dispatch) => {
    authApi.getMe().then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setUserData(id, login, email, true));
        }
    });
};

export const login = (email, password, rememberMe) => (dispatch) => {
    authApi.login(email, password, rememberMe = false)
        .then(data => {
            if(data.resultCode === 0) {
                dispatch(setUserData());
            }
        });
}
export const logout = () => (dispatch) => {
    authApi.logout()
        .then(data => {
            if(data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false));
            }
        });
}

export default authReducer;