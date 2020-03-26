import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.picture}>
        <img src="https://secureservercdn.net/198.71.233.227/3e8.f42.myftpupload.com/wp-content/uploads/2017/03/IMG.png?time=1582652694" />
      </div>

      <div className={s.descriptionBlock}>ava + des</div>
    </div>
  );
};

export default ProfileInfo;
