import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/Message";


const Dialogs = (props) => {

  let dialogsElements = props.dialogsData.map(d => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));

  let messagesElements = props.messagesData.map(m => (
    <MessageItem message={m.message} key={m.id} id={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
