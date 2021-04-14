import update from 'react-addons-update';
import { SUCCESS_MESSAGES_LOADING } from '../actions/messageActions';

const initialStore = {
    chats: {
        1: {title: 'Чат 1', messageList: []},
        2: {title: 'Чат 2', messageList: [2]},
        3: {title: 'Чат 3', messageList: [1]},
        4: {title: 'Чат 4', messageList: []},
    },
    total: 4,
};

const chatReducer = (store = initialStore, action) => {
    let chatId;
  
    switch (action.type) {
        case 'ADD_CHAT':
            chatId = ++store.total;
            return update(store, {
               chats: { $merge: {
                   [chatId]: {
                       title: `Чат ${chatId}`,
                       messageList: []
               } } },
            });
        case 'UPDATE_CHAT_ADD':
            chatId = action.payload.id;
            return update(store, {
                chats: { $merge: {
                    [chatId]: {
                        title: store.chats[chatId].title,
                        messageList: [...store.chats[chatId].messageList, action.payload.messageId]
                } } },
            });
        case 'UPDATE_CHAT_DELETE':
            chatId = action.payload.id;
            const messageId = parseInt(action.payload.messageId);
            const idx = store.chats[chatId].messageList.findIndex((item) => item === messageId);

            return update(store, {
                chats: { $merge: {
                    [chatId]: {
                        title: store.chats[chatId].title,
                        messageList: [
                            ...store.chats[chatId].messageList.slice(0, idx),
                            ...store.chats[chatId].messageList.slice(idx + 1)
                        ]
                } } },
            });
        case 'DELETE_CHAT':
            chatId = action.payload;
            const newChats = {};
            for (const key in store.chats) {
                if (key !== chatId) newChats[key] = store.chats[key];
            }

            return update(store, {
                chats: { $set: newChats },
            });
        case SUCCESS_MESSAGES_LOADING: {
            const chats = {...store.chats};
            const chatId = 1;
            action.payload.entities.messages.forEach(msg => {
                const { _id } = msg;
                chats[chatId].messageList.push(_id);
            });
            return update(store, {
                chats: { $set: chats },
                isLoading: { $set: false },
            });
        }
        default:
            return store;
    }
};
  
export default chatReducer;
  