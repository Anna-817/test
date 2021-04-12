const initialChats = {
    1: {title: 'Чат 1', messageList: [1]},
    2: {title: 'Чат 2', messageList: [2]},
    3: {title: 'Чат 3', messageList: []},
    4: {title: 'Чат 4', messageList: []},
};

const updateChats = (state, action) => {
    if (state === undefined) {
        return initialChats;
    }
  
    switch (action.type) {
        case 'ADD_CHAT':
            const chatId = Object.keys(state.chats).length + 1;

            return {...state.chats, 
                [chatId]: { ...state.chats[chatId],
                    messageList: []
                }
            };
        case 'UPDATE_CHAT':
            const currentChat = state.chats[action.payload.id];
            currentChat.messageList = [
                ...currentChat.messageList,
                action.payload.messageId
            ];

            return state.chats;
  
        default:
            return state.chats;
    }
};
  
export default updateChats;
  