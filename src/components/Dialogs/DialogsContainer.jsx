import React from "react";
import {addMessageActionCreate, changeValueMessageActionCreate,} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        messageValue: state.messagesPage.messageValue
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        upDateTextMessage: (text) => {dispatch(changeValueMessageActionCreate(text))},
        addMessage: () => {
            let action = addMessageActionCreate();
            dispatch(action);
        }

    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
