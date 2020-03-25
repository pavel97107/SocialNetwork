import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.item}>
      <img src="https://lh3.googleusercontent.com/proxy/ufGN-_YO6N9urnqVuvyNGrHY_tfsPESXSI17ASqTsxaLX0pnF7YBAPorzRaLjFV9lfRyL8tgU3xcKOxPZMpFgVxxx4oOnl3sDEj0wphs" />
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
