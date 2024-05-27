// import React from "react";
// import s from './Dialogs.module.css';
// import DalogItem from "./DialogItem/DialogItem";
// import Message from "./Message/Message";
import { sendMessageCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialog";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        // isAuth: state.auth.isAuth
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        },
    
    };
}


export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect)(Dialogs)

