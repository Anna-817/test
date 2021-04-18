import { addMessageToChat, addMessage } from "../actions/index";

export default (store) => (next) => (action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            if (action.payload.author === 'me') {
                setTimeout(() => {
                    const messageId = Object.keys(store.getState().messageReducer.messages).length + 1;
                    store.dispatch(
                        addMessage({
                            id: messageId,
                            text: 'Не приставай ко мне, я робот!',
                            author: 'bot',
                            chatId: action.payload.chatId
                        })
                    );
                    store.dispatch(
                        addMessageToChat({id: action.payload.chatId, messageId})
                    );
                }, 1000);
            }
    }
   return next(action);
}