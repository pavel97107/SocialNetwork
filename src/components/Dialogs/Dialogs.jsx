import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/Message";



const Dialogs = (props) => {
debugger;
    let dialogsElements = props.messagesPage.dialogsData.map(d => (
        <DialogItem name={d.name} key={d.id} id={d.id}/>
    ));

    let messagesElements = props.messagesPage.messagesData.map(m => (
        <MessageItem message={m.message} key={m.id} id={m.id}/>
    ));

    let onAddMessage = () => {
        props.addMessage();
    };
    // принимает данные с BLL(object state) и при клике отрисовывает сообщение

    const onChangeMessage = (event) => {
        let text = event.target.value;
        props.upDateTextMessage(text);
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
                <textarea className={s.textForm}  value={props.messagesPage.messageValue}
                          onChange={onChangeMessage}/>
                    <div><button className={s.addBtn} onClick={onAddMessage} type='submit'>add</button></div>
                </div>
            </div>


        </div>
    );
};

export default Dialogs;
