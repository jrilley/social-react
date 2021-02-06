import React from 'react';
import Dialogs from './Dialogs';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => { // Прокидываем стейт в пропсы
    return {
        messagesPage: state.messagesPage
    }
};
let mapDispatchToProps = (dispatch) => {  // Прокидываем диспатчи в пропсы
    return {
        sendMessage: () => {
            dispatch(addMessageActionCreator()); // Закидываем данные в стейт
        },
        onMessageChange: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        }
    }
};

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;