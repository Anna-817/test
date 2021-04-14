import React, { useEffect } from "react";
import { connect } from 'react-redux';
import * as actions from '../../../actions';

import { AUTHORS } from "../../../utils/constants";
import Message from "./Message";
import InputForm from "./InputForm";

import "./messageField.scss";

const MessageField = ({
        chatId,
        chats,
        addMessageToChat,
        deleteMessageFromChat,
        messages,
        addMessage
    }) => {
    const { messageList } = chats[chatId];

    const addMessageHandler = (newMessage, author = 'me') => {
        if (newMessage.length > 0) {
            const messageId = Object.keys(messages).length + 1;

            addMessageToChat({id: chatId, messageId});
            addMessage({id: messageId, text: newMessage, author, chatId});
        }
    };

    const deleteMessageHandler = (e) => {
        const messageId = e.currentTarget.getAttribute('data-id');
        deleteMessageFromChat({id: chatId, messageId});
    }

    return (
        <div className="message-block">
            <div className="message-field">
                {messageList.map((messageId, index) => (
                    <Message 
                        text={messages[messageId].text}
                        author={messages[messageId].author}
                        name={AUTHORS[messages[messageId].author]}
                        id={messageId}
                        key={messageId}
                        deleteMessageHandler={deleteMessageHandler} />
                ))}
            </div>
            <InputForm addMessage={addMessageHandler} />
        </div>
    );
};

const mapStateToProps = ({ chatReducer, messageReducer }) => ({
    chats: chatReducer.chats,
    messages: messageReducer.messages,
});
  
export default connect(mapStateToProps, actions)(MessageField);