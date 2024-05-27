import React from "react";
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from "../../../utils/Validators/validators";
import { TextArea } from "../../common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
                <form onSubmit={props.handleSubmit}>

                    <div>
                    <Field name="newMessageBody" placeholder={'Enter new message'} component={TextArea}
                    validate={[required, maxLength50]}/>
                    </div>
                    
                    <div><button>Send</button></div>
                </form>
    )
}

export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)