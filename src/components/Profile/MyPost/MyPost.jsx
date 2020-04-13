import React from "react";
import s from "./MyPost.module.css";
import Post from "./post/Post";


const MyPost = props => {
  let postsElements = props.profilePage.posts.map(e => (
    <Post message={e.message} id={e.id} likeCount={e.likeCount} key={e.id} />
  ));

  let newPostElement = React.createRef();
  // ссылка на textarea

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let textAreaPost = newPostElement.current.value;
    props.updateNewPostText(textAreaPost);
  };

  return (
    <div className={s.postsBlock}>
      My post
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          className={s.textForm}
          value={props.newPostText}
          name="user_post"
          id=""
          cols="30"
          rows="10"
          placeholder="Message..."
        />
        <div className={s.boxBtn}>
          <button onClick={onAddPost} className={s.btnAdd} type="submit">
            Add post
          </button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPost;
