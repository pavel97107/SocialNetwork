import React from "react";
import s from "./MyPost.module.css";
import Post from "./post/Post";

const MyPost = props => {
  let posts = [
    { id: 1, message: "this is good", likeCount: 12 },
    { id: 2, message: "I am learn javascript", likeCount: 10 },
    { id: 2, message: "I am learn javascript", likeCount: 10 },
    { id: 2, message: "I am learn javascript", likeCount: 10 }
  ];

  let postsElements = posts.map(e => (
    <Post message={e.message} id={e.id} likeCount={e.likeCount} key={e.id} />
  ));

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
        />
        <div>
          <button type="submit">Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPost;
