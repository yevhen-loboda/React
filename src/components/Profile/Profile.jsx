import React from "react";
import s from './Profile.module.css';
// import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

  return <div className={s.content}>
    <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
    <MyPostsContainer />
  </div>
}

export default Profile;