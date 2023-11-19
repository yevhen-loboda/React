import React from "react";
import s from './Dialogs.module.css';
import DalogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DalogItem name={dialog.name} id={dialog.id} />)
    let messegesElements = state.messages.map(m => <Message message={m.message} />)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
        // props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messegesElements}</div>
                <div>
                    <div><textarea value={newMessageBody} placeholder="Enter new message" onChange={onNewMessageChange}></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
           
        </div>
    )
}

export default Dialogs;

