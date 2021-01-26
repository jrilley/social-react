import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, i am there', LikesCount: 12},
                {id: 2, message: 'Hello world', LikesCount: 23},
                {id: 3, message: 'Hello world, i am there', LikesCount: 1}
            ],
            newPostText: ''
        },
        messagesPage: {
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
        },
        friendsPage: {
            friends: [
                {id: 1, name: 'Anton', img: 'https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg'},
                {id: 2, name: 'Roman', img: 'https://memepedia.ru/wp-content/uploads/2018/06/cover-2-2-768x507.jpg'},
                {id: 3, name: 'Platon', img: 'https://pbs.twimg.com/media/EcZzOJbXgAEpndc.jpg'},
                {id: 4, name: 'Baton', img: 'https://download-cs.net/steam/avatars/3412.jpg'},
                {id: 5, name: 'Ilon', img: 'https://cs11.pikabu.ru/post_img/big/2020/04/26/10/1587922073141910862.jpg'}
            ]
        }
    },
    _rerenderEntireTree() {
        console.log('The state has been changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);

        this._rerenderEntireTree(this._state);
    }
};

export default store;