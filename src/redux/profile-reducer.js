const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    posts: [
        {id: 1, message: 'Hi, i am there', LikesCount: 12},
        {id: 2, message: 'Hello world', LikesCount: 23},
        {id: 3, message: 'Hello world, i am there', LikesCount: 1}
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            let newPost = {
                id: 7,
                message: stateCopy.newPostText,
                LikesCount: 0
            };
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
            }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
            }
        default:
            return state;
    }


    return state;
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;