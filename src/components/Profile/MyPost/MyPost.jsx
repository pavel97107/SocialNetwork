import React from "react";
import s from "./MyPost.module.css";
import Post from "./post/Post";

const MyPost = () => {
  return (
    <div className={s.post}>
      My post
      <div>
        <textarea
          name="user_post"
          id=""
          cols="30"
          rows="10"
          placeholder="Message..."
        ></textarea>
        <button type="submit">Add post</button>
      </div>
      <div className={s.posts}>
        <Post />
      </div>
    </div>
  );
};

export default MyPost;
