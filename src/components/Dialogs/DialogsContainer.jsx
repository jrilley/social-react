import React from 'react';
import Dialogs from './Dialogs';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

const DialogsContainer = (props) => {

    let state = props.store.getState().messagesPage;

    let sendMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (<Dialogs
        sendMessage={sendMessage}
        onMessageChange={onMessageChange}
        messgesPage={state}
    />);
}

export default DialogsContainer;