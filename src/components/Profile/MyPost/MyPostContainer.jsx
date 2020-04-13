import React from "react";
import {addPostActionCreate, changeNewPostActionCreate} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import connect from "react-redux/lib/connect/connect";


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        newPostText: state.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            let action = addPostActionCreate();
            dispatch(action);
        },
        updateNewPostText: (text) => {
            let action = changeNewPostActionCreate(text);
            dispatch(action);
        }

    }
}


const MyPostContainer = connect(mapStateToProps, mapDispatchToProps) (MyPost);

export default MyPostContainer;
