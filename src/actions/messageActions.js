import { RSAA, getJSON } from 'redux-api-middleware';
import { normalize } from 'normalizr';
import { messages } from '../utils/schemas';

export const ADD_MESSAGE = '@@message/ADD_MESSAGE';

export const sendMessage = (messageId, text, author, chatId) => ({
   type: ADD_MESSAGE,
   messageId,
   text,
   author,
   chatId,
});

export const START_MESSAGES_LOADING = '@@message/START_MESSAGES_LOADING';
export const SUCCESS_MESSAGES_LOADING = '@@message/SUCCESS_MESSAGES_LOADING';
export const ERROR_MESSAGES_LOADING = '@@message/ERROR_MESSAGES_LOADING';

export const loadMessages = () => ({
    [RSAA]: {
        endpoint: 'https://cat-fact.herokuapp.com/facts',
        method: 'GET',
        types: [
            START_MESSAGES_LOADING,
            {
                type: SUCCESS_MESSAGES_LOADING,
                payload: (action, state, res) => getJSON(res).then(
                   json => json//normalize(json, [messages]),
                ),
            },
            ERROR_MESSAGES_LOADING,
        ],
    },
});