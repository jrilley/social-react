import React from 'react';
import Dialogs from './Dialogs';
import {addMessageActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => { // Прокидываем стейт в пропсы
    return {
        messagesPage: state.messagesPage,
    }
};
let mapDispatchToProps = (dispatch) => {  // Прокидываем диспатчи в пропсы
    return {
        sendMessage: (newMessageBody) => {
            dispatch(addMessageActionCreator(newMessageBody)); // Закидываем данные в стейт
        }
    }
};

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs);