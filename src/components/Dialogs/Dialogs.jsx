import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import {Field, reduxForm} from "redux-form";
import {maxLength100, renderField, required} from "../../helpers/ValidationForm";

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

const TextAreaField = renderField('textarea');

const DialogsForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.messageArea}>
                <Field label={"Введите сообщение"}
                       component={TextAreaField}
                       name={"newMessageBody"}
                       validate={[ required, maxLength100 ]}
                />
            </div>
            <div className={s.messageBtn}>
                <button type={"submit"} disabled={props.submitting}>Send message</button>
            </div>
        </form>
    );
}

let DialogsReduxForm = reduxForm({form: 'dialogs'})(DialogsForm);

export default Dialogs;