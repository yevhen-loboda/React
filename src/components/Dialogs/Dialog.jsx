import React from "react";
import { Navigate } from 'react-router-dom';
import s from './Dialogs.module.css';
import DalogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
// import { Field, reduxForm } from 'redux-form';
// import { TextArea } from "../common/FormsControls/FormsControls";
// import { maxLengthCreator, required } from "../../utils/Validators/validators";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
// import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DalogItem name={dialog.name} id={dialog.id} key={dialog.id} />)
    let messegesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>)
    // let newMessageBody = state.newMessageBody

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if(!props.isAuth) return <Navigate to={"/login"}/>;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messegesElements}</div>
                
            </div>
           <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    )
}

// const maxLength50 = maxLengthCreator(50);

// const AddMessageForm = (props) => {
//     return (
//                 <form onSubmit={props.handleSubmit}>
//                     <Field name="newMessageBody" placeholder={'Enter new message'} component={TextArea}
//                     validate={[required, maxLength50]}/>
                    
//                     <div><button>Send</button></div>
//                 </form>
//     )
// }

// const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;

