import React from "react";
import s from "./Post.module.css";

const Post = props => {
  return (
    <div className={s.item}>
      <div className={s.boxImg}><img src="https://goodlogo.com/images/logos/bmw_logo_2651.gif" /></div>
      {props.message}
      <div>
        <span>like {props.likeCount}</span>
      </div>
    </div>
  );
};

export default Post;
