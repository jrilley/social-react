import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import userReducer from "./user-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    friendsPage: friendsReducer,
    usersPage: userReducer
});

let store = createStore(reducers);

window.store = store;

export default store;