import React from "react";
import {addPostActionCreate, changeNewPostActionCreate} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import StoreContext from "../../../StoreContext";



const MyPostContainer = props => {
  return (
      <StoreContext.Consumer>
          { (store) => {
          let addPost = () => {
            let action = addPostActionCreate();
            store.dispatch(action);
          };

          let onPostChange = (text) => {
            let action = changeNewPostActionCreate(text);
            store.dispatch(action);
          };
          return <MyPost updateNewPostText={onPostChange}
                  addPost={addPost}
                  posts={store.getState().profilePage.posts}
                  newPostText={store.getState().profilePage.newPostText}/>
        }
      }
      </StoreContext.Consumer>

  );
};

export default MyPostContainer;
