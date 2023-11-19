import React from "react";
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return <div className={s.content}>Main content
    <div>
      <img src='https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg' alt="Photoapparat"></img>
    </div>

    <div className={s.descriptionBlock}>ava+description</div>
    
    </div>
}

export default ProfileInfo;