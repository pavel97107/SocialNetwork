import React from "react";
import {addMessageActionCreate, changeValueMessageActionCreate,} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let addMessage = () => {
                    let action = addMessageActionCreate();
                    store.dispatch(action);
                };

                const onChangeMessage = (text) => {
                    store.dispatch(changeValueMessageActionCreate(text));
                };
                return (
                    <Dialogs messagesPage={store.getState().messagesPage}
                             upDateTextMessage={onChangeMessage}
                             addMessage={addMessage}/>
                )

            }
            }
        </StoreContext.Consumer>

    );
};

export default DialogsContainer;
