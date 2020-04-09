const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: "this is good", likeCount: 12}
    ],
    newPostText: ''
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 7,
                message: state.newPostText,
                likeCount: 13
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case CHANGE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;
        default:
            return state;
    }
};

export const addPostActionCreate = () => ({type: ADD_POST});
export const changeNewPostActionCreate = (text) =>
    ({
        type: CHANGE_NEW_POST_TEXT,
        text: text
    })
;


export default profileReducer;