const ADD_MESSAGE = 'ADD-MESSAGE';

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
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}]
            };
        default:
            return state;
    }

};

export const addMessageActionCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody});

export default dialogsReducer;