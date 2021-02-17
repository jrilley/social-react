import {profileApi} from "../api/profileApi";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState = { // Инициализация начального стейта
    posts: [
        {id: 1, message: 'Hi, i am there', LikesCount: 12},
        {id: 2, message: 'Hello world', LikesCount: 23},
        {id: 3, message: 'Hello world, i am there', LikesCount: 1}
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let body = action.newPostText;
            return {
                ...state, // Копируем стейт
                posts: [...state.posts, {id: 7, message: body, LikesCount: 0}] // Заполняем новый объект постами из основгного стейта и добавляем новые
            };
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }

};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setProfile = (profile) => ({ type: SET_PROFILE, profile });
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getProfile = (userId) => (dispatch) => {
    if (!userId) {
        userId = 2;
    }
    profileApi.getProfile(userId).then((data) => {
        dispatch(setProfile(data));
    });
};

export const getStatus = (userId) => (dispatch) => {
    profileApi.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    })
}

export const updateStatus = (status) => (dispatch) => {
    profileApi.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}

export default profileReducer;