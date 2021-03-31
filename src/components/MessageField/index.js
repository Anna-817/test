import React, { useEffect, useState, useCallback, useMemo } from "react";

// import { usePrev } from "../../utils/hooks";
import { AUTHORS } from "../../utils/constants";
import Message from "./Message";
import InputForm from "./InputForm";

const initalMessages = [{
    author: 'ME', 
    text: "Привет",
    id: 'key_0'
}, {
    author: 'ME', 
    text: "Как дела?",
    id: 'key_1'
}];

const MessageField = () => {
    const [messages, setMessages] = useState(initalMessages);

    const messagesToShow = useMemo(() => {
        return messages.filter((message) => message.text.length > 3)
    }, [messages]);

    const addMessage = useCallback((newMessage) => {
        setMessages((prevMess) => [...prevMess, {
            author: 'ME',
            text: newMessage,
            id: `key_${prevMess.length}`
        }]);
    }, []);

    const addBotMessage = useCallback(() => {
        setTimeout(() => {
            setMessages((prevMess) => [...prevMess, {
                author: 'BOT',
                text: "Не приставай ко мне, я робот!",
                id: `key_${prevMess.length}`
            }]);
        }, 1000);
    }, []);

    // const prevMessages = usePrev(messages);
    useEffect(() => {
        if (messages[messages.length - 1].author === 'ME' && messages.length > 2) {
            addBotMessage();
        }
    }, [messages]);

    return (
        <div>
            {messagesToShow.map((mes, i) => (
                <Message text={mes.text} name={AUTHORS[mes.author]} key={mes.id} />
            ))}
            <InputForm addMessage={addMessage} />
        </div>
    );
};

export default MessageField;