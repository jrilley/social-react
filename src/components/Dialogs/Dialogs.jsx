import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import {Field, reduxForm} from "redux-form";
import {maxLength, maxLength300, renderField} from "../../helpers/ValidationForm";

const Dialogs = (props) => {

    let DialogsElements = props.messagesPage.dialogs.map(dialog => <Dialog id={dialog.id} name={dialog.name}/>);
    let MessagesElements = props.messagesPage.messages.map(message => <Message message={message.message}/>);


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
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
                <DialogsReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}

const DialogsForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.messageArea}>
                <Field placeholder={"Введите сообщение"}
                       component={renderField("textarea")}
                       name={"newMessageBody"}
                       validate={[ maxLength300 ]}
                />
            </div>
            <div className={s.messageBtn}>
                <button>Send message</button>
            </div>
        </form>
    );
}

let DialogsReduxForm = reduxForm({form: 'dialogs'})(DialogsForm);

export default Dialogs;