import {combineReducers, createStore, applyMiddleware} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import userReducer from "./user-reducer";
import authReducer from "./auth-reducer";
import thunk from 'redux-thunk';
import {reducer as reducerForm} from 'redux-form';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    friendsPage: friendsReducer,
    usersPage: userReducer,
    auth: authReducer,
    form: reducerForm
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;