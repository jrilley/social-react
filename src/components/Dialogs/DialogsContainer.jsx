import React from 'react';
import Dialogs from './Dialogs';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState().messagesPage;

            let sendMessage = () => {
                store.dispatch(addMessageActionCreator());
            }

            let onMessageChange = (text) => {
                store.dispatch(updateNewMessageTextActionCreator(text));
            }
            return <Dialogs
                sendMessage={sendMessage}
                onMessageChange={onMessageChange}
                messgesPage={state}/>
        }
        }
    </StoreContext.Consumer>;
}

export default DialogsContainer;