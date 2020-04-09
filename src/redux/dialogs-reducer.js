
const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_VALUE_MESSAGE = 'CHANGE-VALUE-MESSAGE';

let initialState = {
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
};


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 8,
                message: state.messageValue
            };
            state.messagesData.push(newMessage);
            state.messageValue = '';
            return state;
        case CHANGE_VALUE_MESSAGE:
            state.messageValue = action.text;
            return state;
        default:
            return state;
    }
};

export const addMessageActionCreate = () => ({type: ADD_MESSAGE});
export const changeValueMessageActionCreate = (text) =>
    ({
        type: CHANGE_VALUE_MESSAGE,
        text: text
    })
;

export default dialogsReducer;