
const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_VALUE_MESSAGE = 'CHANGE-VALUE-MESSAGE';

const dialogsReducer = (state, action) => {
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