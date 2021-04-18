import update from 'react-addons-update';

import {
    START_MESSAGES_LOADING,
    SUCCESS_MESSAGES_LOADING,
    ERROR_MESSAGES_LOADING,
 } from '../actions/messageActions';

const initialStore = {
    messages: {
        1: { text: "Привет!", author: 'bot' },
        2: { text: "Здравствуйте!", author: 'bot' },
    },
    isLoading: true,
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
        case START_MESSAGES_LOADING: {
            return update(store, {
                isLoading: { $set: true },
            });
        }
        case SUCCESS_MESSAGES_LOADING: {
            const messages = {};
            const author = 'bot';
            action.payload.forEach(msg => {
                const { text, _id } = msg;
                messages[_id] = { text, author, chatId: 1 };
            });
            return update(store, {
                messages: { $set: messages },
                isLoading: { $set: false },
            });
        }
        case ERROR_MESSAGES_LOADING: {
            return update(store, {
                isLoading: { $set: false },
            });
        }
        default:
            return store;
    }
};
  
export default messageReducer;