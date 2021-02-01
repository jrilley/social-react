const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
    dialogs: [
        {id: 1, name: 'Anton'},
        {id: 2, name: 'Roman'},
        {id: 3, name: 'Platon'},
        {id: 4, name: 'Baton'},
        {id: 5, name: 'Ilon'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are u?'},
        {id: 3, message: 'Gutten tack'}
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_MESSAGE: {
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            let newMessage = {
                id: 4,
                message: stateCopy.newMessageText
            };
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
            }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        default:
            console.log(2);
    }

    return state;
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsReducer;