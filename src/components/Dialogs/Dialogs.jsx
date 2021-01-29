import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
    debugger
    let DialogsElements = props.messgesPage.dialogs.map(dialog => <Dialog id={dialog.id} name={dialog.name}/>);
    let MessagesElements = props.messgesPage.messages.map(message => <Message message={message.message}/>);


    let sendMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.onMessageChange(text);
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
                    <textarea onChange={onMessageChange} value={props.messgesPage.newMessageText} />
                </div>
                <div className={s.messageBtn}>
                    <button onClick={ sendMessage } >Send message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;