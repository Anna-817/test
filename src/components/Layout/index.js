import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from "./Header";
import MessageField from "./MessageField";
import ChatList from "./ChatList";

import "./layout.scss";

export const Layout = () => {
    return (
        <MuiThemeProvider>
            <div>
                <Header />
                <div className="layout">
                    <MessageField />
                    <ChatList />
                </div>
            </div>
        </MuiThemeProvider>
    );
  };

  export default Layout;