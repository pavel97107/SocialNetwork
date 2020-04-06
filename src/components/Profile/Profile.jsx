import React from "react";
import s from "./Profile.module.css";
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPost
          dispatch={props.dispatch}
          posts={props.profilePage.posts}
          newPostText={props.profilePage.newPostText}
          changeNewPostText={props.changeNewPostText}/>
    </div>
  );
};

export default Profile;
