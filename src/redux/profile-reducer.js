const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE = 'SET_PROFILE';

const initialState = { // Инициализация начального стейта
    posts: [
        {id: 1, message: 'Hi, i am there', LikesCount: 12},
        {id: 2, message: 'Hello world', LikesCount: 23},
        {id: 3, message: 'Hello world, i am there', LikesCount: 1}
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let body = state.newPostText;
            return {
                ...state, // Копируем стейт
                newPostText: '', // Зануляем значение
                posts: [...state.posts, {id: 7, message: body, LikesCount: 0}] // Заполняем новый объект постами из основгного стейта и добавляем новые
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText // Добавляем новое значение
            };
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state;
    }

};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setProfile = (profile) => ({ type: SET_PROFILE, profile });


export default profileReducer;