import update from 'react-addons-update';

const initialStore = {
    messages: {
        1: { text: "Привет!", author: 'bot' },
        2: { text: "Здравствуйте!", author: 'bot' },
    }
};

const messageReducer = (store = initialStore, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return update(store, {
                messages: { $merge: {
                    [action.payload.id]: {
                        text: action.payload.text,
                        author: action.payload.author,
                        chatId: action.payload.chatId,
                } } },
            });
        case 'DELETE_MESSAGE':
            const id = action.payload;
            const newMessages = {};
            for (const key in store.messages) {
                if (key !== id) newMessages[key] = store.messages[key];
            }

            return update(store, {
                messages: { $set: newMessages },
            });

        default:
            return store;
    }
};
  
export default messageReducer;