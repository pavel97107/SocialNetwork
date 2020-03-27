import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  );
};

const MessageItem = props => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = () => {
  let dialogsData = [
    { id: 1, name: "Jack" },
    { id: 2, name: "Pavel" },
    { id: 3, name: "Jason" },
    { id: 4, name: "Stas" },
    { id: 5, name: "Dima" }
  ];

  let messagesData = [
    { id: 1, message: "hi, how are you?" },
    { id: 2, message: "Hello world" },
    { id: 3, message: "Good Moorning" },
    { id: 4, message: "I can't believe" },
    { id: 5, message: "She is beaty" }
  ];

  let dialogsElements = dialogsData.map(d => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));

  let messagesElements = messagesData.map(m => (
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
