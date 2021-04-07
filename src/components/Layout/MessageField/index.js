import React, { useEffect, useRef } from "react";

import { AUTHORS } from "../../../utils/constants";
import Message from "./Message";
import InputForm from "./InputForm";

import "./messageField.scss";

const MessageField = ({
        chatId,
        messages,
        setMessages,
        chats,
        setChats
    }) => {
    const timer = useRef(null);

    const addMessage = (newMessage, author = 'me') => {
        if (newMessage.length > 0) {
            clearTimeout(timer.current);
            const messageId = Object.keys(messages).length + 1;

            setMessages({...messages,
                [messageId]: {text: newMessage, author: author}
            });

            setChats({...chats, 
                [chatId]: { ...chats[chatId],
                    messageList: [...chats[chatId]['messageList'], messageId]
                }
            });
        }
    };

    useEffect(() => {
        if (Object.values(messages)[Object.values(messages).length - 1].author === 'me') {
            timer.current = setTimeout(() => {
                addMessage('Не приставай ко мне, я робот!', 'bot');
            }, 1000);
            return () => clearInterval(timer.current);
        }
    }, [messages]);

    return (
        <div className="message-block">
            <div className="message-field">
                {chats[chatId].messageList.map((messageId, index) => (
                    <Message 
                        text={messages[messageId].text}
                        author={messages[messageId].author}
                        name={AUTHORS[messages[messageId].author]}
                        key={index} />
                ))}
            </div>
            <InputForm addMessage={addMessage} />
        </div>
    );
};

export default MessageField;