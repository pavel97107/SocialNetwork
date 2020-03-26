import React from "react";
import s from "./MyPost.module.css";
import Post from "./post/Post";

const MyPost = () => {
  return (
    <div className={s.postsBlock}>
      My post
      <div>
        <textarea
          name="user_post"
          id=""
          cols="30"
          rows="10"
          placeholder="Message..."
        ></textarea>
        <div>
          <button type="submit">Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post name="alex" likeCount="0" />
        <Post name="Hi, my name is Pavel" likeCount="11" />
      </div>
    </div>
  );
};

export default MyPost;
