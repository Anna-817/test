import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import messageReducer from './messages';
import chatReducer from './chats';
import profileReducer from './profile';

export default (history) => combineReducers({
    router: connectRouter(history),
    messageReducer,
    chatReducer,
    profileReducer,
});
