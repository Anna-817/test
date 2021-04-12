import React, { useState } from "react";

import Header from "./Header";
import MessageField from "./MessageField";
import ChatList from "./ChatList";

import "./layout.scss";

export const Layout = ({chatId = 1}) => {
    return (
        <>
            <Header chatId={ chatId } />
            <div className="layout">
                <ChatList />
                <MessageField chatId={ chatId }/>
            </div>
        </>
    );
  };

  export default Layout;