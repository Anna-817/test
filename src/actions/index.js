export const addChat = () => {
    return {
        type: 'ADD_CHAT'
    };
};

export const updateChat = (payload) => {
    return {
        type: 'UPDATE_CHAT',
        payload
    };
};

export const addMessage = (payload) => {
    return {
        type: 'ADD_MESSAGE',
        payload
    };
};