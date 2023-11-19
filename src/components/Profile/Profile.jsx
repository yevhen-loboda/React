import React from "react";
import s from './Profile.module.css';
// import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

  return <div className={s.content}>
    <ProfileInfo />
    {/* <MyPostsContainer posts ={props.profilePage.posts} 
    dispatch={props.dispatch}
    newPostText={props.profilePage.newPostText}/> */}

{/* <MyPostsContainer store={props.store}/> */}

<MyPostsContainer />
  </div>
}

export default Profile;