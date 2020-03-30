import React from "react";
import s from "./Post.module.css";

const Post = props => {
  return (
    <div className={s.item}>
      <img src="https://lh3.googleusercontent.com/proxy/MKmonwylOmrqLgPBY6pUTgy8_lb1Q-9Ex8o0DFvATz59Q46QUo5xqOdwwoPJe4qkBJlvg94RijQoCqmqZNjEo8_zbQlO6fFl45HQrFVNrEI" />
      {props.message}
      <div>
        <span>like {props.likeCount}</span>
      </div>
    </div>
  );
};

export default Post;
