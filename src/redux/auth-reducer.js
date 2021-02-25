import {authApi} from "../api/authApi";
import {stopSubmit} from 'redux-form';

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

export const setUserData = (userId, login, email, isAuth) => ({
    type: SET_USER_DATA, data: {userId, login, email, isAuth}
});

export const getAuthUserData = () => async (dispatch) => {
    let response = await authApi.me();

    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setUserData(id, login, email, true));
    }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authApi.login(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        dispatch(stopSubmit('login', {_error: response.data.messages}))
    }
}
export const logout = () => async (dispatch) => {
    let response = await authApi.logout()

    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
}

export default authReducer;