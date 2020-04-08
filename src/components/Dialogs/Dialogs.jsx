import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/Message";
import {addMessageActionCreate, changeValueMessageActionCreate,} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(d => (
        <DialogItem name={d.name} key={d.id} id={d.id}/>
    ));

    let messagesElements = props.state.messagesData.map(m => (
        <MessageItem message={m.message} key={m.id} id={m.id}/>
    ));

    let addMessage = () => {
        props.dispatch(addMessageActionCreate());
    };
    // принимает данные с BLL(object state) и при клике отрисовывает сообщение

    let textAreaLink = React.createRef();
    const onChangeMessage = (event) => {
        const text = event.target.value;
        props.dispatch(changeValueMessageActionCreate(text));
    };
    // при смене символов в textarea данные переписываются в BLL и отправляются через props

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogsElements}</div>
            <div className={s.messages}>
                <div className={s.contentMessages}>
                  <div className={s.messageItems}>{messagesElements}</div>
                </div>
                <div className={s.addDataMessage}>
                <textarea className={s.textForm}  value={props.state.messageValue}
                          onChange={onChangeMessage}/>
                    <div><button className={s.addBtn} onClick={addMessage} type='submit'>add</button></div>
                </div>
            </div>


        </div>
    );
};

export default Dialogs;
