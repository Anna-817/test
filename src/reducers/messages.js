const initialMessages = {
    1: { text: "Привет!", author: 'bot' },
    2: { text: "Здравствуйте!", author: 'bot' },
};

const updateMessages = (state, action) => {
    if (state === undefined) {
        return initialMessages;
    }
  
    switch (action.type) {
        case 'ADD_MESSAGE':
            return {...state.messages, 
                [action.payload.id]: {
                    text: action.payload.text,
                    author: action.payload.author
                }
            };

        default:
            return state.messages;
    }
};
  
export default updateMessages;