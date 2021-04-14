export const addChat = () => {
    return {
        type: 'ADD_CHAT'
    };
};

export const addMessageToChat = (payload) => {
    return {
        type: 'UPDATE_CHAT_ADD',
        payload
    };
};

export const deleteMessageFromChat = (payload) => {
    return {
        type: 'UPDATE_CHAT_DELETE',
        payload
    };
};

export const deleteChat = (payload) => {
    return {
        type: 'DELETE_CHAT',
        payload
    };
};

export const addMessage = (payload) => {
    return {
        type: 'ADD_MESSAGE',
        payload
    };
};
