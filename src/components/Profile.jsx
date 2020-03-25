import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div className={s.picture}>
        <img src="https://secureservercdn.net/198.71.233.227/3e8.f42.myftpupload.com/wp-content/uploads/2017/03/IMG.png?time=1582652694" />
      </div>

      <div>ava + des</div>

      <div className={s.post}>
        My post <div>New Post</div>
        <div className={s.posts}>
          <div className={s.item}>post 1</div>
          <div className={s.item}>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
