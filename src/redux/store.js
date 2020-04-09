import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


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
        },
        sidebar: {}

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
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }

}


window.store = store;
export default store;