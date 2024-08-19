import React from "react";
import { Input, createField } from "../../common/FormsControls/FormsControls";
import { reduxForm } from "redux-form";


const ProfileDataForm = ({profile}) => {
  //   return   <form>
  //   {/* { isOwner && */}
  //     <div>
  //     <button onClick={()=>{}}>save</button>
  //   </div>
  //   {/* } */}
    
  // <div>
  //   <b>Full Name</b>: {createField("Full name", "fullName", [], Input)}
  //   </div>
  //   <div>
  //   <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
  //   </div>
  //   { profile.lookingForAJob &&
  //     <div>
  //   <b>My professional skills</b>: {profile.lookingForAJobDescription}
  //   </div>
  //   }
  //   <div>
  //   <b>About me</b>: {profile.aboutMe}
  //   </div>
  //   <div>
  //   <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {

  //   //   return <Contact key={key} contactTitle={key} contactValue= {profile.contacts[key]}/>
  //   })}
  //   </div>
  // </form>
  }

  const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
  export default ProfileDataFormReduxForm;