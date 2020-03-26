import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  );
};

const Message = props => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = props => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Jack" id="1" />
        <DialogItem name="Pavel" id="2" />
        <DialogItem name="Jason" id="3" />
        <DialogItem name="Stas" id="4" />
        <DialogItem name="Dima" id="5" />
      </div>
      <div className={s.messages}>
        <Message message="hi, how are you?" />
        <Message message="Hello world!" />
        <Message message="Good Moorning" />
      </div>
    </div>
  );
};

export default Dialogs;
