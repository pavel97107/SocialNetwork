import React from "react";
import {addMessageActionCreate, changeValueMessageActionCreate,} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState();

    let addMessage = () => {
        let action = addMessageActionCreate();
        props.store.dispatch(action);
    };

    const onChangeMessage = (text) => {
        props.store.dispatch(changeValueMessageActionCreate(text));
    };

    return (
        <Dialogs messagesPage={state.messagesPage}
        upDateTextMessage={onChangeMessage}
        addMessage={addMessage}/>
    );
};

export default DialogsContainer;
