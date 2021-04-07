import updateMessages from './messages';
import updateChats from './chats';
import updateProfile from './profile';

const reducer = (state, action) => {
    return {
        messages: updateMessages(state, action),
        chats: updateChats(state, action),
        profile: updateProfile(state, action)
    };
};

export default reducer;
