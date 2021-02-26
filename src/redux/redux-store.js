import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import userReducer from "./user-reducer";
import authReducer from "./auth-reducer";
import thunk from 'redux-thunk';
import {reducer as reducerForm} from 'redux-form';
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: userReducer,
    auth: authReducer,
    form: reducerForm,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunk)));
window.store = store;

export default store;