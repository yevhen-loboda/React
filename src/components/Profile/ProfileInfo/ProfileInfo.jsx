import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
// import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
    return <div className={s.content}>Main content
    <div>
      <img src='https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg' alt="Photoapparat"></img>
    </div>

    <div className={s.descriptionBlock}>
      <img src={props.profile.photos.large}/>
      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
      </div>
    
    </div>
}

export default ProfileInfo;