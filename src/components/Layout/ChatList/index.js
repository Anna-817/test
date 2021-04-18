import React from 'react';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { addChat, deleteChat } from '../../../actions';

import { List, ListItem } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Delete from '@material-ui/icons/Delete';

import AddChatForm from "./AddChatForm";
import "./chatList.scss";

const ChatList = ({chats, addChat, deleteChat, push}) => {
    const handleNavigate = (link) => {
        push(link);
    };

    const handleDeleteChat = (e) => {
        const chatId = e.currentTarget.getAttribute('data-id');
        push('/');
        deleteChat(chatId);
    }

    return (
        <div className="chat-list">
            <div className="chat-list__title">Chat List</div>
            <div>
                <List className="chat-list__block">
                    {Object.keys(chats).map((chatId) => {
                        return (
                            <ListItem
                                key={chatId}
                                className="chat-list__item">
                                <span className="chat-list__name"
                                    onClick={() => handleNavigate(`/chat/${chatId}/`)}>
                                    <SendIcon className="chat-list__icon" />
                                    {`Чат ${chatId}`}
                                </span>
                                <Delete className="chat-list__del"
                                    data-id={chatId}
                                    onClick={handleDeleteChat} />
                            </ListItem>
                        );
                    })}
                </List>
                <AddChatForm addChat={addChat} />
            </div>
        </div>
    );
};

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
});

const mapDispatchToProps = {
    addChat,
    deleteChat,
    push
};
  
export default connect(mapStateToProps, mapDispatchToProps)(ChatList);