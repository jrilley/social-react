import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {
   if(props.isAuth) {
       let DialogsElements = props.messagesPage.dialogs.map(dialog => <Dialog id={dialog.id} name={dialog.name}/>);
       let MessagesElements = props.messagesPage.messages.map(message => <Message message={message.message}/>);


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
                       <textarea onChange={onMessageChange} value={props.messagesPage.newMessageText} />
                   </div>
                   <div className={s.messageBtn}>
                       <button onClick={ sendMessage } >Send message</button>
                   </div>
               </div>
           </div>
       );
   } else {
       return <Redirect to="/login" />
   }
}

export default Dialogs;