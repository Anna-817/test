import React, { useEffect, useRef } from "react";
import { connect } from 'react-redux';
import * as actions from '../../../actions';

import { AUTHORS } from "../../../utils/constants";
import Message from "./Message";
import InputForm from "./InputForm";

import "./messageField.scss";

const MessageField = ({
        chatId,
        chats,
        updateChat,
        messages,
        addMessage
    }) => {
    const timer = useRef(null);
    const { messageList } = chats[chatId];

    const addMessageHandler = (newMessage, author = 'me') => {
        if (newMessage.length > 0) {
            clearTimeout(timer.current);
            const messageId = Object.keys(messages).length + 1;

            updateChat({id: chatId, messageId});
            addMessage({id: messageId, text: newMessage, author});
        }
    };

    useEffect(() => {
        if (Object.values(messages)[Object.values(messages).length - 1].author === 'me') {
            timer.current = setTimeout(() => {
                addMessageHandler('Не приставай ко мне, я робот!', 'bot');
            }, 1000);
            return () => clearInterval(timer.current);
        }
    }, [messages]);

    return (
        <div className="message-block">
            <div className="message-field">
                {messageList.map((messageId, index) => (
                    <Message 
                        text={messages[messageId].text}
                        author={messages[messageId].author}
                        name={AUTHORS[messages[messageId].author]}
                        key={index} />
                ))}
            </div>
            <InputForm addMessage={addMessageHandler} />
        </div>
    );
};

const mapStateToProps = (state) => {
    return state;
};
  
export default connect(mapStateToProps, actions)(MessageField);