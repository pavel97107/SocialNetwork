import React from "react";
import {addPostActionCreate, changeNewPostActionCreate} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";



const MyPostContainer = props => {
  let state = props.store.getState();

  let addPost = () => {
    let action = addPostActionCreate();
    props.store.dispatch(action);
  };

  let onPostChange = (text) => {
    let action = changeNewPostActionCreate(text);
    props.store.dispatch(action);
  };

  return (
    <MyPost updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}/>
  );
};

export default MyPostContainer;
