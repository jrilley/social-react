import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    let DialogsElements = props.state.dialogs.map(dialog => <Dialog id={dialog.id} name={dialog.name}/>);
    let MessagesElements = props.state.messages.map(message => <Message message={message.message}/>);

    let addMessageElement = React.createRef();

    let sendMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {DialogsElements}
            </div>
            <div className={s.messages}>
                {MessagesElements}
            </div>
            <div className={s.addMessage}>
                <div className={s.messageArea}>
                    <textarea onChange={onMessageChange} value={props.state.newMessageText} />
                </div>
                <div className={s.messageBtn}>
                    <button onClick={ sendMessage } >Send message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;