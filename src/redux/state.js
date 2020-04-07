const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_VALUE_MESSAGE = 'CHANGE-VALUE-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "this is good", likeCount: 12}
            ],
            newPostText: ''
        },
        messagesPage: {
            dialogsData: [
                {id: 1, name: "Jack"},
                {id: 2, name: "Pavel"},
                {id: 3, name: "Jason"},
                {id: 4, name: "Stas"},
                {id: 5, name: "Dima"}
            ],
            messagesData: [
                {id: 1, message: "hi, how are you?"},
                {id: 2, message: "Hello world"},
                {id: 3, message: "Good Moorning"},
                {id: 4, message: "I can't believe"},
                {id: 5, message: "She is beaty"}
            ],

            messageValue: ''
        }


    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    _callSubscriber() {
        console.log('state changed')
    },


    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 7,
                message: this._state.profilePage.newPostText,
                likeCount: 13
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === CHANGE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.text;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 8,
                message: this._state.messagesPage.messageValue
            };

            this._state.messagesPage.messagesData.push(newMessage);
            this._state.messagesPage.messageValue = '';
            this._callSubscriber(this._state);
        } else if (action.type === CHANGE_VALUE_MESSAGE) {
            this._state.messagesPage.messageValue = action.text;
            this._callSubscriber(this._state);
        }
    }

};


export const addPostActionCreate = () => ({type: ADD_POST});

export const changeNewPostActionCreate = (text) =>
    ({
        type: CHANGE_NEW_POST_TEXT,
        text: text
    })
;

window.store = store;
export default store;