let rerenderEntireTree;

let state = {
    profilePage: {
        posts:[
            { id: 1, message: "this is good", likeCount: 12 }
        ],
        newPostText: ''
    },
    messagesPage: {
        dialogsData:[
            { id: 1, name: "Jack" },
            { id: 2, name: "Pavel" },
            { id: 3, name: "Jason" },
            { id: 4, name: "Stas" },
            { id: 5, name: "Dima" }
        ],
        messagesData:[
            { id: 1, message: "hi, how are you?" },
            { id: 2, message: "Hello world" },
            { id: 3, message: "Good Moorning" },
            { id: 4, message: "I can't believe" },
            { id: 5, message: "She is beaty" }
        ],

        messageValue: ''
    }


};

let changeNewPostText = (text) => {
    state.profilePage.newPostText = text;
    console.log(state.profilePage.newPostText);
    rerenderEntireTree(state);
};

let addPost = () => {
    let newPost = {
        id: 7,
        message: state.profilePage.newPostText,
        likeCount: 13
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
    console.log(state);
};

// Profile отрисовывает изменения в state( добовляет новый пост на стену)

let changeValue = (text) => {
    state.messagesPage.messageValue = text;
    console.log(state.messagesPage.messageValue);
    rerenderEntireTree(state);
};

let addMessage = () => {
    let newMessage = {
        id: 8,
        message: state.messagesPage.messageValue
    };

    state.messagesPage.messagesData.push(newMessage);
    state.messagesPage.messageValue = '';
    rerenderEntireTree(state);
};

// Dialogs отрисовывает изменения в state( добовляет новое сообщение)


const subscribe = (observer) => {
    rerenderEntireTree = observer;
};


export {
    addPost, state, changeNewPostText, changeValue, addMessage, subscribe
};