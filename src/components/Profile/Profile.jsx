import React from "react";
import s from "./Profile.module.css";
import MyPost from "./MyPost/MyPost";

const Profile = () => {
  return (
    <div className={s.content}>
      <div className={s.picture}>
        <img src="https://secureservercdn.net/198.71.233.227/3e8.f42.myftpupload.com/wp-content/uploads/2017/03/IMG.png?time=1582652694" />
      </div>

      <div>ava + des</div>
      <MyPost />
    </div>
  );
};

export default Profile;
