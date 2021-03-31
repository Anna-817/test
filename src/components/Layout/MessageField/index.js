import React, { useEffect, useState, useRef } from "react";

import { AUTHORS } from "../../../utils/constants";
import Message from "./Message";
import InputForm from "./InputForm";

import "./messageField.scss";

const initalMessages = [{
        author: 'BOT', 
        text: "Привет",
        id: 'key_0'
    }, {
        author: 'BOT', 
        text: "Как дела?",
        id: 'key_1'
    }];

const MessageField = () => {
    const [messages, setMessages] = useState(initalMessages);
    const timer = useRef(null);

    const addMessage = (newMessage, author) => {
        author = author || 'ME';
        clearTimeout(timer.current);

        setMessages((prevMess) => [...prevMess, {
            author: author,
            text: newMessage,
            id: `key_${prevMess.length}`
        }]);
    };

    useEffect(() => {
        if (messages[messages.length - 1].author === 'ME') {
            timer.current = setTimeout(() => {
                addMessage('Не приставай ко мне, я робот!', 'BOT');
            }, 10000);
            return () => clearInterval(timer.current);
        }
    }, [messages]);

    return (
        <div className="message-block">
            <div className="message-field">
                {messages.map((mes, i) => (
                    <Message text={mes.text} id={mes.id} name={AUTHORS[mes.author]} key={mes.id} />
                ))}
            </div>
            <InputForm addMessage={addMessage} />
        </div>
    );
};

export default MessageField;