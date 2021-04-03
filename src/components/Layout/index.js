import React, { useState } from "react";

import Header from "./Header";
import MessageField from "./MessageField";
import ChatList from "./ChatList";

import "./layout.scss";

const initialMessages = {
    1: { text: "Привет!", author: 'bot' },
    2: { text: "Здравствуйте!", author: 'bot' },
};

const initialChats = {
    1: {title: 'Чат 1', messageList: [1]},
    2: {title: 'Чат 2', messageList: [2]},
    3: {title: 'Чат 3', messageList: []},
};

export const Layout = ({chatId = 1}) => {
    const [messages, setMessages] = useState(initialMessages);
    const [chats, setChats] = useState(initialChats);

    return (
        <>
            <Header chatId={ chatId } />
            <div className="layout">
                <ChatList
                    chats={chats}
                    setChats={setChats} />
                <MessageField 
                    chatId={ chatId }
                    messages={messages}
                    setMessages={setMessages}
                    chats={chats}
                    setChats={setChats} />
            </div>
        </>
    );
  };

  export default Layout;