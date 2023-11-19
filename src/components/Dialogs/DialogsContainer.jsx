import React from "react";
import s from './Dialogs.module.css';
import DalogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialog";
import { connect } from "react-redux";


// const DialogsContainer = () => {

 

    // return <StoreContext.Consumer> 
    //     {
    //     (store) => {
    //         let state = store.getState().dialogsPage;
    //         let onSendMessageClick = () => {
    //             store.dispatch(sendMessageCreator())
    //         }
    //         let onNewMessageChange = (body) => {
    //             store.dispatch(updateNewMessageBodyCreator(body))
    //         }
    //        return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state} />
    //     }
    //     }
    // </StoreContext.Consumer>



// }
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: () => {
            dispatch(sendMessageCreator())
        },
        sendMessage: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
    };
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (Dialogs);

export default DialogsContainer;

