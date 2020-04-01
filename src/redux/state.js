import rerenderEntireTree from "../render";


let state = {
    profilePage: {
        posts:[
            { id: 1, message: "this is good", likeCount: 12 }
        ]
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
        ]
    }


};

let addPost = (postMessage) => {
  let newPost = {
      id: 7,
      message: postMessage,
      likeCount: 13
  };

  state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};


export {
    addPost, state
};