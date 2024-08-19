import React, {useState} from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
// import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.jpg";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = (props) => {

  let [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if(e.target.files.length) {
     props.savePhoto(e.target.files[0]);
    }
  }
    return <div className={s.content}>Main content
    <div>
      <img src='https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg' alt="Photoapparat"></img>
    </div>

    <div className={s.descriptionBlock}>
      <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto}/>
      {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
    { editMode ? <ProfileDataForm profile={props.profile}/> :
     <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={()=>{setEditMode(true)}}/>
     }

      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
      </div>
    
    </div>
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return  <div>
    { isOwner &&
      <div>
      <button onClick={goToEditMode}>edit</button>
    </div>
    }
    
  <div>
    <b>Full Name</b>: {profile.fullName}
    </div>
    <div>
    <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
    </div>
    { profile.lookingForAJob &&
      <div>
    <b>My professional skills</b>: {profile.lookingForAJobDescription}
    </div>
    }
    <div>
    <b>About me</b>: {profile.aboutMe}
    </div>
    <div>
    <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {

      return <Contact key={key} contactTitle={key} contactValue= {profile.contacts[key]}/>
    })}
    </div>
  </div>
}



const Contact = ({contactTitle, contactValue}) => {
  return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>

}

export default ProfileInfo;