import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/Message";


const Dialogs = (props) => {

  let dialogsElements = props.state.dialogsData.map(d => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));

  let messagesElements = props.state.messagesData.map(m => (
    <MessageItem message={m.message} key={m.id} id={m.id} />
  ));

  let addMessage = () => {
      props.addMessage();
  };

  let textAreaLink = React.createRef();

  const onChangeMessage = () => {
      let textMessageTextarea = textAreaLink.current.value;
      props.changeValue(textMessageTextarea);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
        <div className={s.addDataMessage}>
            <textarea className={s.textForm} ref={textAreaLink} value={props.state.messageValue} onChange={onChangeMessage}/>
            <button className={s.addBtn} onClick={addMessage} type='submit'>add</button>
        </div>

    </div>
  );
};

export default Dialogs;
